export const timeToText = (tomorrow: string, date: string): string => {
	if (tomorrow === date.slice(0, 2)) {
		return "Tomorrow Tasks";
	} else {
		return `${date.slice(0, 5).replace(".", "/")} Tasks`;
	}
};
