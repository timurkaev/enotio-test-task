import React, { FC, MouseEvent } from "react";
import styles from "./TodoHeader.module.css";

import { Title } from "../../ui/Title/Title";
import { SettingsIcon } from "../../ui/icons/SettingsIcon";

import { IconButton, MenuItem, Menu, Switch } from "@mui/material";

interface ITodoHeaderProp {
	handleShowNews: () => void;
}

export const TodoHeader: FC<ITodoHeaderProp> = ({
	handleShowNews,
}): JSX.Element => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleMenu = (event: MouseEvent<HTMLElement>): void => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (): void => {
		setAnchorEl(null);
	};

	return (
		<div className={styles.header}>
			<Title size="m">To Do</Title>
			<IconButton
				aria-controls="menu-appbar"
				aria-haspopup="true"
				color="primary"
				onClick={handleMenu}
			>
				<SettingsIcon />
			</IconButton>
			<Menu
				classes={{ paper: styles.popup }}
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem>
					Hide news <Switch onChange={handleShowNews} />
				</MenuItem>
			</Menu>
		</div>
	);
};
