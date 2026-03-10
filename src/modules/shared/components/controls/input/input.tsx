import { cva, type VariantProps } from "class-variance-authority";
import { type InputHTMLAttributes, type Ref } from "react";

import { cn } from "@/lib/utils/cn";

const inputVariants = cva(
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

export interface InputProps
	extends
		InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {
	ref?: Ref<HTMLInputElement>;
}

export function Input({ className, variant, ...props }: InputProps) {
	return (
		<input className={cn(inputVariants({ variant }), className)} {...props} />
	);
}
