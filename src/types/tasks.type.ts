export interface ITasksInterface {
	id: number;
	title: string;
	subtitle: string;
	date: string;
	importance: "verylow" | "low" | "middle" | "high";
	completed: boolean;
}

export type IById = Record<string, Array<ITasksInterface>>;
