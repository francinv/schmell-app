export type userSettings = {
  voice: string;
  language: string;
  showDetail: showDetailType[];
};

export type showDetailType = {
  show: boolean;
  id: number;
};
