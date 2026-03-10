import { clsx } from "clsx";

import { Select, type SelectProps } from "../../controls/select";
import { FormControl } from "../form-control/form-control";
import { type FormControlledProps } from "../form-control/types";

export type FormSelectProps = FormControlledProps<Omit<SelectProps, "variant">>;

export function FormSelect({ className, name, ...props }: FormSelectProps) {
	return (
		<FormControl name={name}>
			{({ ref, error, ...formProps }) => (
				<Select
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
