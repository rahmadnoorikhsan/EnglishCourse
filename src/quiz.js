import { dailyLesson } from './daily-course.js';

export function gradeQuiz(week, day, kind, choices) {
  const item = dailyLesson(week, day);
  if (!item || !['pattern', 'reading', 'listening'].includes(kind)) return null;
  const questions = item.quizzes[kind];
  if (!Array.isArray(choices) || choices.length !== questions.length || choices.some((choice,index)=>!Number.isInteger(choice) || choice<0 || choice>=questions[index].options.length)) return null;
  return questions.map((question,index)=>({correct:choices[index]===question.answer,answer:question.options[question.answer],explanation:question.explanation}));
}
export function materialIdentity(week, day, kind) {
  return `local:w${week}:${day === 6 && kind !== 'pattern' ? 'assessment' : `daily-v1:d${day}`}:${kind}`;
}
