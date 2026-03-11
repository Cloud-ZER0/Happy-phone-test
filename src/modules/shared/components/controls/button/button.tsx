import { type ButtonHTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	children?: ReactNode;
}

const variantStyles = {
	primary: [
		"text-white",
		"bg-gradient-to-b from-[#5264D3] to-[#1F2D86]",
		"disabled:cursor-not-allowed disabled:text-[#A2A6C0] disabled:bg-[#E6EAFF]",
		"hover:from-[#5264D3] hover:to-[#111F77]",
	].join(" "),
	secondary: [
		"px-[22px] py-[14px] border-2 border-[#F3F4FA]",
		"text-[#090E28] bg-white",
		"disabled:cursor-not-allowed disabled:text-[#A2A6C0] disabled:bg-[#E6EAFF]",
		"hover:text-[#090E28] hover:bg-[#F3F4FA]",
	].join(" "),
};

export function Button({
	className,
	variant = "primary",
	children,
	...props
}: ButtonProps) {
	const baseStyles = [
		"cursor-pointer",
		"select-none",
		"inline-flex",
		"items-center",
		"justify-center",
		"px-6",
		"py-4",
		"rounded-2xl",
		"font-sans",
		"text-base",
		"font-semibold",
		"leading-relaxed",
		"text-center",
		"whitespace-nowrap",
		"transition-all",
		"duration-200",
		"ease-in-out",
		"hover:scale-[1.01]",
	].join(" ");

	return (
		<button
			{...props}
			className={cn(baseStyles, variantStyles[variant], className)}
		>
			{children}
		</button>
	);
}
