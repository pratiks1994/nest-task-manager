export type Task = {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
  userId?: number | null;
};

export type CreateTask = Omit<Task, 'id'>;
