import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { documents } from './content.js';
import { routeHref } from './router.js';
import dailyCsv from '../tracker-harian.csv?url';
import weeklyCsv from '../tracker-mingguan.csv?url';

const downloads = { 'tracker-harian.csv': dailyCsv, 'tracker-mingguan.csv': weeklyCsv };
export const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
export const slug = text => text.toLowerCase().replace(/[^\p{L}\p{N}_\- ]/gu, '').replace(/ /g, '-');

export function markdown(source, documentId = '') {
  const template = document.createElement('template');
  template.innerHTML = DOMPurify.sanitize(marked.parse(source, { gfm: true, breaks: false }));
  for (const link of template.content.querySelectorAll('a')) {
    const href = link.getAttribute('href') || '';
    const [file, fragment] = href.split('#');
    const doc = documents.find(item => item.file === file);
    if (doc) link.setAttribute('href', routeHref(`panduan/${doc.id}${fragment ? `/${encodeURIComponent(fragment)}` : ''}`));
    else if (downloads[file]) {
      link.setAttribute('href', downloads[file]);
      link.setAttribute('download', file);
    } else if (href.startsWith('#') && !href.startsWith('#/') && documentId) {
      link.setAttribute('href', routeHref(`panduan/${documentId}/${encodeURIComponent(href.slice(1))}`));
    } else if (/^https?:\/\//.test(href)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  }
  for (const heading of template.content.querySelectorAll('h1,h2,h3,h4')) heading.id = slug(heading.textContent);
  for (const [index, table] of [...template.content.querySelectorAll('table')].entries()) {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', `Tabel ${index + 1}, geser untuk melihat semua kolom`);
    table.replaceWith(wrapper);
    wrapper.append(table);
  }
  return template.innerHTML;
}

export function toc(source, documentId) {
  return source.split('\n').filter(line => /^## /.test(line)).map(line => {
    const title = line.slice(3).replace(/[*`]/g, '');
    return `<a class="toc-link" href="${escapeHtml(routeHref(`panduan/${documentId}/${encodeURIComponent(slug(title))}`))}">${escapeHtml(title)}</a>`;
  }).join('');
}

export const csvDownloads = { daily: dailyCsv, weekly: weeklyCsv };
