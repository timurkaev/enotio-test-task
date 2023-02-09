import { styled, Switch as SwitchTheme } from "@mui/material";
import CheckIcon from "./icons/check.svg";
import CloseIcon from "./icons/close.svg";

export const Switch = styled(SwitchTheme)(({ theme }) => ({
	width: 50,
	height: 29,
	padding: 0,
	display: "flex",
	"& .MuiSwitch-switchBase": {
		padding: 0,
		marginLeft: 2,
		marginTop: 2,
		transitionDuration: "100ms",
		"& + .MuiSwitch-track": {
			backgroundColor: "#366EFF",
		},
		"&.Mui-checked": {
			transform: "translateX(21px)",
			color: "#fff",
			"& .MuiSwitch-thumb:before": {
				backgroundImage: `url(${CheckIcon})`,
			},
			"& + .MuiSwitch-track": {
				backgroundColor: "#10C200",
				opacity: 1,
				border: 0,
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: 0.5,
			},
		},
		"&.Mui-focusVisible .MuiSwitch-thumb": {
			color: "#33cf4d",
			border: "6px solid #fff",
		},
		"&.Mui-disabled .MuiSwitch-thumb": {
			color:
				theme.palette.mode === "light"
					? theme.palette.grey[100]
					: theme.palette.grey[600],
		},
		"&.Mui-disabled + .MuiSwitch-track": {
			opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
		},
	},
	"& .MuiSwitch-thumb": {
		boxSizing: "border-box",
		width: 25,
		height: 25,
		"&:before": {
			content: "''",
			position: "absolute",
			width: "100%",
			height: "100%",
			left: 0,
			top: 0,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundImage: `url(${CloseIcon})`,
		},
	},
	"& .MuiSwitch-track": {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
		opacity: 1,
		transition: theme.transitions.create(["background-color"], {
			duration: 100,
		}),
	},
}));
