import React, { FC, useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import styles from "./TodoContainer.module.css";

import { byDate } from "./utils/byDate";
import { useAppContext } from "../../../context/todo.context";
import { TodoHeader } from "../../widgets/TodoHeader/TodoHeader";
import { TodoItem } from "../../widgets/TodoItem/TodoItem";
import { TodoFooter } from "../../widgets/TodoFooter/TodoFooter";

const queryClient = new QueryClient();

export const TodoContainer: FC = (): JSX.Element => {
	const [showNews, setShowNews] = useState<boolean>(true);

	const handleShowNews = (): void => {
		setShowNews(!showNews);
	};

	const { state } = useAppContext();

	return (
		<div className={styles.wrapper}>
			<TodoHeader handleShowNews={handleShowNews} />
			<ul className={styles.nav}>
				{Object.keys(byDate(state.tasks)).map((date) => (
					<TodoItem key={date} date={date} byDate={byDate(state.tasks)} />
				))}
			</ul>
			<QueryClientProvider client={queryClient}>
				{showNews && <TodoFooter />}
			</QueryClientProvider>
		</div>
	);
};
