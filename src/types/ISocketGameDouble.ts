type ISocketGameDouble = {
  id: string;
  type: "analyzing" | "entry" | "win" | "loss" | "gale" | "cancel-analyzing";
  roll?: number;
  color?: "red" | "black" | "white";
  last_result?: number;
  target?: "red" | "black" | "white";
  result?: "red" | "black" | "white";
  amount?: number;
  martingale_sequence?: number;
  hour?: string;
};

export type { ISocketGameDouble };
