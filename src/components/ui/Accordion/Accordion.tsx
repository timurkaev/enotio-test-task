import { styled, Accordion as AccordionTheme } from "@mui/material";

export const Accordion = styled(AccordionTheme)(() => ({
	"&.MuiAccordion-root": {
		width: "350px",
		marginBottom: "32px",
		borderRadius: "25px",
		background: "#282828",
		boxShadow: `16px 16px 20px rgba(0, 0, 0, 0.15),
		-8px -8px 20px rgba(255, 255, 255, 0.05);`,
		padding: "10px 20px 10px 0",
		transition: "0.3s",
	},
	"&.MuiAccordion-root:before": {
		backgroundColor: "transparent",
	},
	"&.Mui-expanded": {
		borderRadius: "40px",
		transition: "0.3s",
		paddingBottom: 0,
	},
	"&.MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(180deg)",
	},
}));
