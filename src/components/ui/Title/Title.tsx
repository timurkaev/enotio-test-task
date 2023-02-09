import React, { FC } from "react";

import cn from "classnames";
import styles from "./Title.module.css";

import { Typography } from "@mui/material";
import { TitleProps } from "./Title.props";

export const Title: FC<TitleProps> = ({
	children,
	size,
	className,
}): JSX.Element => {
	return (
		<Typography
			className={cn(styles.title, className, {
				[styles.small]: size === "s",
				[styles.medium]: size === "m",
			})}
		>
			{children}
		</Typography>
	);
};
