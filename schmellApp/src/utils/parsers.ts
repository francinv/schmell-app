export const parseFunctionAnswer = (questionFunc: string) =>
  JSON.parse(questionFunc).answer;

export const parseFunctionTimer = (questionFunc: string) =>
  questionFunc ? JSON.parse(questionFunc).timer : undefined;

export const parseFunctionChallenges = (questionFunc: string) =>
  JSON.parse(questionFunc).challenges;

export const parseFunctionQuestions = (questionFunc: string) =>
  JSON.parse(questionFunc).questions;

export const parseFunctionOptions = (questionFunc: string) =>
  JSON.parse(questionFunc).options;

export const parseFunctionCorrectAnswer = (questionFunc: string) =>
  JSON.parse(questionFunc).correctAnswer;
