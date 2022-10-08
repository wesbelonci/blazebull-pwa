type ISocketGameCrash = {
  id: string;
  type: "analyzing" | "entry" | "win" | "loss" | "gale" | "cancel-analyzing";
  crash_point?: number;
  last_result?: number;
  martingale_sequence?: number;
  target?: number;
  result: any;
  amount?: number;
  hour?: string;
};

export type { ISocketGameCrash };
