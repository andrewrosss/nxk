export type Config = {
  active: string;
  projects: Record<string, AliasObject>;
};

export type AliasObject = {
  projectId: string;
  serviceAccount: string;
};
