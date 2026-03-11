import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithRef, type ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export type FieldLabelVariants = "default" | "error";

const labelTextVariants = cva(
	[
		"font-sans",
		"text-[16px]",
		"font-semibold",
		"leading-relaxed",
		"text-left",
		"max-md:text-base",
	].join(" "),
	{
		variants: {
			variant: {
				default: "",
				error: "text-[#CC1616]",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface FieldLabelRootProps
	extends
		ComponentPropsWithRef<"label">,
		VariantProps<typeof labelTextVariants> {}

export interface FieldLabelTextProps
	extends
		ComponentPropsWithRef<"span">,
		VariantProps<typeof labelTextVariants> {}

export interface FieldLabelProps extends Omit<FieldLabelRootProps, "children"> {
	label?: ReactNode;
	children?: ReactNode;
}

export function FieldLabelRoot({
	ref,
	className,
	children,
	...props
}: FieldLabelRootProps) {
	return (
		<label
			ref={ref}
			className={cn("flex flex-col gap-2", className)}
			{...props}
		>
			{children}
		</label>
	);
}

export function FieldLabelText({
	ref,
	className,
	children,
	variant = "default",
	...props
}: FieldLabelTextProps) {
	return (
		<span
			ref={ref}
			className={cn(labelTextVariants({ variant }), className)}
			{...props}
		>
			{children}
		</span>
	);
}

export function FieldLabel({
	ref,
	className,
	label,
	children,
	variant = "default",
	...props
}: FieldLabelProps) {
	return (
		<FieldLabelRoot ref={ref} className={className} {...props}>
			<FieldLabelText variant={variant}>{label}</FieldLabelText>
			{children}
		</FieldLabelRoot>
	);
}
