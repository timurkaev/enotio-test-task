import React, { FC } from "react";
import { TodoContainer } from "./components/screens/TodoContainer/TodoContainer";

export const App: FC = (): JSX.Element => {
	return (
		<div className="container">
			<TodoContainer />
		</div>
	);
};
