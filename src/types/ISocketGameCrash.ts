type IWebSocketCrash = {
  id: string;
  type: "analyzing" | "entry" | "win" | "loss" | "gale";
  crash_point?: number;
  last_result?: number;
  target?: number;
  result: any;
  amount?: number;
  hour?: string;
};

export type { IWebSocketCrash };
