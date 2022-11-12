type IRound = {
  id: string;
  reference_id: string;
  game: "crash" | "double";
  crash_point: number;
  roll: string;
  color: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  finish_at: Date;

  user_entry?: any;
};

export type { IRound };
