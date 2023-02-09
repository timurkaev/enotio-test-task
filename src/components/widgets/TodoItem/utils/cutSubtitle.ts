export const cutSubtitle = (subtitle: string): string => {
	if (subtitle.length > 25) {
		return `${subtitle.slice(0, 25)}...`;
	} else {
		return subtitle;
	}
};
