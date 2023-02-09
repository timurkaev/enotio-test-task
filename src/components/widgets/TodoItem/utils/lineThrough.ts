import { ITasksInterface } from "../../../../types/tasks.type";

import cn from "classnames";
import styles from "../TodoItem.module.css";

export const lineThrough = (task: ITasksInterface): string => {
	return cn(styles.taskTitle, {
		[styles.lineThrough]: task.completed,
	});
};
