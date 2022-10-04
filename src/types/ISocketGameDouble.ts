type ISocketGameDouble = {
  id: string;
  type: "analyzing" | "entry" | "win" | "loss" | "gale";
  roll?: number;
  color?: "red" | "black" | "white";
  last_result?: number;
  target?: number;
  result?: "red" | "black" | "white";
  amount?: number;
  hour?: string;
};

export type { ISocketGameDouble };
