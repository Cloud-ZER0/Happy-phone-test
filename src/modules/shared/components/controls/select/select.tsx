import { cva, type VariantProps } from "class-variance-authority";
import {
	type InputHTMLAttributes,
	type PropsWithChildren,
	type Ref,
} from "react";

import { cn } from "@/lib/utils/cn";

const selectVariants = cva(
	[
		"px-6 py-[14px] rounded-2xl",
		"font-sans text-lg font-medium leading-relaxed",
		"text-[#090E28]",
		"outline-none",
		"transition-all duration-200 ease-in-out",
		"placeholder:text-[#777777] placeholder:opacity-100",

		"max-md:px-6 max-md:py-4 max-md:text-base",
	].join(" "),
	{
		variants: {
			variant: {
				default: "border-2 border-transparent bg-[#F5F5F5]",
				error: [
					"border-2 border-[#CC1616]",
					"text-[#CC1616] bg-[#FFF3F3]",
					"placeholder:text-[#CC1616]/80",
				].join(" "),
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface SelectProps
	extends
		InputHTMLAttributes<HTMLSelectElement>,
		VariantProps<typeof selectVariants> {
	ref?: Ref<HTMLSelectElement>;
}

export function Select({
	className,
	variant,
	children,
	...props
}: PropsWithChildren<SelectProps>) {
	return (
		<select className={cn(selectVariants({ variant }), className)} {...props}>
			{children}
		</select>
	);
}
