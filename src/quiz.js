import { course } from './course.js';

export function gradeQuiz(week, day, kind, choices) {
  const item = course[week - 1];
  if (!item || !['pattern', 'reading', 'listening'].includes(kind)) return null;
  const questions = day === 6 && kind !== 'pattern' ? item.assessment[kind + 'Quiz'] : item.quizzes[kind];
  if (!Array.isArray(choices) || choices.length !== questions.length || choices.some((choice,index)=>!Number.isInteger(choice) || choice<0 || choice>=questions[index].options.length)) return null;
  return questions.map((question,index)=>({correct:choices[index]===question.answer,answer:question.options[question.answer],explanation:question.explanation}));
}
