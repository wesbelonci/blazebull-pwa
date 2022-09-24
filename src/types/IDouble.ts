type IDouble = {
  id: string;
  title: string;
  type: "analyzing" | "entry" | "win" | "loss" | "gale";
  text?: string;
  roll?: string;
  color?: string;
  last?: number;
  amount?: string;
  target?: number;
  result: number;
  hour?: string;
};

export type { IDouble };
