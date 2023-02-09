import { IById, ITasksInterface } from "../../../../types/tasks.type";

export const byDate = (tasks: ITasksInterface[]): IById => {
	return tasks.reduce((obj: IById, task: ITasksInterface) => {
		if (obj[task.date]) {
			obj[task.date].push(task);

			return obj;
		}
		obj[task.date] = [{ ...task }];
		return obj;
	}, {});
};
