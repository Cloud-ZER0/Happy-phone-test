import { type ReactNode } from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

export interface ChildrenProps extends UseFormRegisterReturn {
	error: boolean;
}

export type FormControlledProps<T> = Omit<T, keyof ChildrenProps> & {
	name: string;
};

export interface FormControlProps {
	className?: string;
	name: string;
	children: (props: ChildrenProps) => ReactNode;
}
