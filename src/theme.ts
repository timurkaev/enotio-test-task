import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
	palette: {
		primary: {
			main: "#F4F4F4",
		},
	},
	components: {
		MuiCheckbox: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiMenu: {
			styleOverrides: {},
		},
	},
});
