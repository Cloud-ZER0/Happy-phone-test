import { clsx } from "clsx";

import { Input, type InputProps } from "../../controls/input";
import { FormControl } from "../form-control/form-control";
import { type FormControlledProps } from "../form-control/types";

export type FormInputProps = FormControlledProps<Omit<InputProps, "variant">>;

export function FormInput({ className, name, ...props }: FormInputProps) {
	return (
		<FormControl name={name}>
			{({ ref, error, ...formProps }) => (
				<Input
					ref={ref}
					className={clsx("w-full min-w-full", className)}
					variant={error ? "error" : "default"}
					{...formProps}
					{...props}
				/>
			)}
		</FormControl>
	);
}
