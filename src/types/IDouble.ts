import { IRound } from "./IRound";

type IDouble = {
  id: string;
  win_loss: "win" | "loss";
  double_game_bet: string;
  martingale: string | null;
  round: IRound;
};

export type { IDouble };
