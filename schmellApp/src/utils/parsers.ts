export const parseFunctionAnswer = (questionFunc: string) =>
  JSON.parse(questionFunc).answer;

export const parseFunctionTimer = (questionFunc: string) =>
  questionFunc ? JSON.parse(questionFunc).timer : undefined;

export const parseFunctionChallenges = (questionFunc: string) =>
  JSON.parse(questionFunc).challenges;
