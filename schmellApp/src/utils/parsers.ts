export const parseFunction = (questionFunc: string) =>
  JSON.parse(questionFunc).answer;

export const parseFunctionTimer = (questionFunc: string) =>
  questionFunc ? JSON.parse(questionFunc).timer : undefined;
