import { tasks } from "../constants/tasks";
import {
	IAction,
	IContextState,
	IState,
	ActionTypes,
} from "./todo.context.types";
import { createContext, FC, ReactNode, useContext, useReducer } from "react";

const initialState: IState = {
	tasks: tasks,
};

const ContextApp = createContext<IContextState | undefined>(undefined);

export const todoReducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
		case ActionTypes.COMPLETE_TASK:
			return {
				...state,
				tasks: [
					...state.tasks.map((task) => {
						if (task.id === action.payload) {
							return { ...task, completed: !task.completed };
						}
						return task;
					}),
				],
			};
		default:
			return state;
	}
};

interface IAppProviderProps {
	children: ReactNode;
}

const useAppContext = () => {
	const context = useContext(ContextApp);
	if (context === undefined) {
		throw new Error("useAppContext must be used within a AppProvider");
	}
	return context;
};

const AppProvider: FC<IAppProviderProps> = ({ children }): JSX.Element => {
	const [state, dispatch] = useReducer(todoReducer, initialState);

	const value = { state, dispatch };

	return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};

export { AppProvider, useAppContext };
