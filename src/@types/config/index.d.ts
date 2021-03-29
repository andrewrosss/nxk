export type Config = {
  active: string;
  aliases: Record<string, AliasObject>;
};

export type AliasObject = {
  projectId: string;
  serviceAccount: string;
};
