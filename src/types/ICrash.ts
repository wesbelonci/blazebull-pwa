import { IRound } from "./IRound";

type ICrash = {
  id: string;
  win_loss: "win" | "loss";
  crash_game_bet: number;
  martingale: string | null;
  round: IRound;
};

export type { ICrash };
