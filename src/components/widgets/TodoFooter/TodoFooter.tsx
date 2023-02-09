import React, { FC } from "react";

import styles from "./TodoFooter.module.css";
import { motion } from "framer-motion";

import { useQuery } from "react-query";
import axios from "axios";

import { CircularProgress } from "@mui/material";

const marqueeVariants = {
	animate: {
		x: [390, -1390],
		transition: {
			x: {
				repeat: Infinity,
				repeatType: "loop",
				duration: 20,
				ease: "linear",
			},
		},
	},
};

export const TodoFooter: FC = () => {
	const { isLoading, data } = useQuery("data", () =>
		axios
			.get("https://hacker-news.firebaseio.com/v0/item/100.json")
			.then((res) => res.data)
	);

	if (isLoading) {
		return (
			<div className={styles.progress}>
				<CircularProgress color="inherit" />
			</div>
		);
	}
	return (
		<div>
			<div className={styles.marquee}>
				<motion.div
					className={styles.track}
					variants={marqueeVariants}
					animate="animate"
				>
					<p>{data.title}</p>
				</motion.div>
			</div>
		</div>
	);
};
