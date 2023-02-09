import type { ReactNode } from "react";

export interface TitleProps {
	children: ReactNode;
	size: "s" | "m";
	className?: string;
}
