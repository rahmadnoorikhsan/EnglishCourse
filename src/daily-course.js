import { course } from './course.js';
import { dailyFoundations } from './daily-foundations.js';
import { dailyWorkplace } from './daily-workplace.js';
import { dailyAcademic } from './daily-academic.js';

export const dailyCourse = [...dailyFoundations, ...dailyWorkplace, ...dailyAcademic];

/** Day six keeps its unseen passages; no practice fallback for invalid dates. */
export function dailyLesson(week, day) {
  if (!Number.isInteger(week) || week < 1 || week > 26 || !Number.isInteger(day) || day < 1 || day > 6) return null;
  const unit = dailyCourse[week - 1];
  if (day < 6) return unit.days[day - 1];
  const assessment = course[week - 1].assessment;
  return {
    ...unit.assessment,
    reading: assessment.reading,
    listening: assessment.listening,
    quizzes: { ...unit.assessment.quizzes, reading: assessment.readingQuiz, listening: assessment.listeningQuiz },
  };
}

export function dailyAudioName(week, day) {
  return `w${String(week).padStart(2, '0')}-${day === 6 ? 'assessment' : `d${day}`}`;
}
