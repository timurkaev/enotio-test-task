import type { ITasksInterface } from "../types/tasks.type";
import type { Dispatch } from "react";

export interface IState {
	tasks: ITasksInterface[];
}

export enum ActionTypes {
	COMPLETE_TASK = "COMPLETE_TASK",
}

export type IAction = {
	type: ActionTypes.COMPLETE_TASK;
	payload: number;
};

export interface IContextState {
	state: IState;
	dispatch: Dispatch<IAction>;
}
