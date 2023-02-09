import React, { FC } from "react";

import styles from "./TodoItem.module.css";

import type { IById, ITasksInterface } from "../../../types/tasks.type";

import { Title } from "../../ui/Title/Title";
import { Switch } from "../../ui/Switch/Switch";
import { Accordion } from "../../ui/Accordion/Accordion";
import { CheckboxIcon } from "../../ui/icons/CheckboxIcon";
import { CheckboxActiveIcon } from "../../ui/icons/CheckboxActiveIcon";
import { ArrowIcon } from "../../ui/icons/ArrowIcon";

import { AccordionDetails, AccordionSummary, Checkbox } from "@mui/material";

import { useAppContext } from "../../../context/todo.context";
import { ActionTypes } from "../../../context/todo.context.types";

import { lineThrough } from "./utils/lineThrough";
import { timeToText } from "./utils/timeToText";
import { cutSubtitle } from "./utils/cutSubtitle";
import { importanceColors } from "./utils/importanceColors";

interface ITodoItemProps {
	date: string;
	byDate: IById;
}

export const TodoItem: FC<ITodoItemProps> = ({ date, byDate }): JSX.Element => {
	const { dispatch } = useAppContext();

	const handleCompleteTask = (id: number): void => {
		dispatch({ type: ActionTypes.COMPLETE_TASK, payload: id });
	};

	const time = new Date();
	const today = time.toLocaleDateString();
	const tomorrow = (time.getDate() + 1).toString();
	const isToday = date === today;

	return (
		<>
			{isToday ? (
				<div className={styles.todayTasks}>
					<Checkbox
						name="checkbox"
						icon={<CheckboxIcon />}
						checkedIcon={<CheckboxActiveIcon />}
						disabled
					/>
					<Title size="s" className={styles.title}>
						Today Tasks:
					</Title>
				</div>
			) : null}

			<Accordion disableGutters={true}>
				{!isToday ? (
					<AccordionSummary expandIcon={<ArrowIcon />}>
						<div className={styles.importance}></div>

						<Title className={styles.todoTitle} size="s">
							{timeToText(tomorrow, date)}
						</Title>
					</AccordionSummary>
				) : null}

				<AccordionDetails classes={{ root: styles.accordionDetails }}>
					{byDate[date].map((task: ITasksInterface) => (
						<div className={styles.taskItem} key={task.id}>
							<div className={importanceColors(task)}></div>
							<div className={styles.taskInfo}>
								<Title className={lineThrough(task)} size="s">
									{task.title}
								</Title>
								<span className={styles.subtitle}>
									{cutSubtitle(task.subtitle)}
								</span>
							</div>
							<Switch
								checked={task.completed}
								onChange={() => handleCompleteTask(task.id)}
							/>
						</div>
					))}
				</AccordionDetails>
			</Accordion>
		</>
	);
};
