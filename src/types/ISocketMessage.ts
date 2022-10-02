type ISocketMessage = {
  id: string;
  game: "crash" | "double";
  type: "analyzing" | "entry" | "win" | "loss" | "gale";
  crash_point?: number;
  roll?: number;
  color?: any;
  last_result?: any;
  target?: any;
  amount?: number;
  result: any;
  hour?: string;
};

export type { ISocketMessage };
