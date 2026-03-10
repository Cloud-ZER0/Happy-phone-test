import { type ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export interface FieldErrorProps {
	className?: string;
	children: ReactNode;
}

const errorStyles = {
	base: "font-sans text-sm font-medium leading-relaxed text-left",
	color: "text-[#CC1616]",
} as const;

export function FieldError({ className, children }: FieldErrorProps) {
	return (
		<span className={cn(errorStyles.base, errorStyles.color, className)}>
			{children}
		</span>
	);
}
