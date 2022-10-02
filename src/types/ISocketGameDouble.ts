type ISocketGameDouble = {
  id: string;
  type: "analyzing" | "entry" | "win" | "loss" | "gale";
  roll?: number;
  color?: any;
  last_result?: number;
  target?: number;
  result: any;
  amount?: number;
  hour?: string;
};

export type { ISocketGameDouble };
