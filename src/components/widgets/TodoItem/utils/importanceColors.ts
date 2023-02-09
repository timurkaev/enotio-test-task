import { ITasksInterface } from "../../../../types/tasks.type";
import cn from "classnames";
import styles from "../TodoItem.module.css";

export const importanceColors = (task: ITasksInterface): string => {
	return cn(styles.importance, {
		[styles.red]: task.importance === "high",
		[styles.blue]: task.importance === "middle",
		[styles.yellow]: task.importance === "low",
		[styles.gray]: task.importance === "verylow",
	});
};
