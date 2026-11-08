import { dailyVideosFoundations } from './daily-videos-foundations.js';
import { dailyVideosWorkplace } from './daily-videos-workplace.js';
import { dailyVideosAcademic } from './daily-videos-academic.js';

// IDs come from official lesson players; videos are never downloaded.
export const videos = [...dailyVideosFoundations, ...dailyVideosWorkplace, ...dailyVideosAcademic]
  .flatMap(unit => unit.days);

export function dailyVideo(week, day) {
  if (!Number.isInteger(week) || week < 1 || week > 26 || !Number.isInteger(day) || day < 1 || day > 6) return null;
  const code = `W${String(week).padStart(2, '0')}D${day}`;
  return videos.find(video => video.code === code) ?? null;
}
