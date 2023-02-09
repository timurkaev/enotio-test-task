import { ITasksInterface } from "../types/tasks.type";

export const tasks: ITasksInterface[] = [
	{
		id: 1,
		title: "Visit David",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: new Date().toLocaleDateString(),
		importance: "high",
		completed: false,
	},
	{
		id: 2,
		title: "Goceries For Dinner",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: new Date().toLocaleDateString(),
		importance: "middle",
		completed: false,
	},
	{
		id: 3,
		title: "Fix Dad’s iPad",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: new Date().toLocaleDateString(),
		importance: "low",
		completed: false,
	},
	{
		id: 4,
		title: "Visit John",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: new Date(Date.now() + 86400000).toLocaleDateString(),
		importance: "verylow",
		completed: false,
	},
	{
		id: 5,
		title: "Learn React",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: new Date(Date.now() + 86400000).toLocaleDateString(),
		importance: "verylow",
		completed: false,
	},
	{
		id: 6,
		title: "Go to Job",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: new Date(Date.now() + 86400000).toLocaleDateString(),
		importance: "verylow",
		completed: false,
	},
	{
		id: 7,
		title: "Visit Family",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: "06.02.2023",
		importance: "verylow",
		completed: false,
	},
	{
		id: 8,
		title: "Go to gym",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: "06.02.2023",
		importance: "verylow",
		completed: false,
	},
	{
		id: 9,
		title: "Clear home",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: "06.02.2023",
		importance: "verylow",
		completed: false,
	},

	{
		id: 10,
		title: "Call Vasya",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: "05.02.2023",
		importance: "verylow",
		completed: false,
	},
	{
		id: 11,
		title: "Learn Node.js",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: "05.02.2023",
		importance: "verylow",
		completed: false,
	},
	{
		id: 12,
		title: "Learn English",
		subtitle:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, repellendus?",
		date: "05.02.2023",
		importance: "verylow",
		completed: false,
	},
];
