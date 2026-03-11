import { clsx } from "clsx";

import { formatPhone } from "@/modules/form/utils/format-phone";

import { Input, type InputProps } from "../../controls/input";
import { FormControl } from "../form-control/form-control";
import { type FormControlledProps } from "../form-control/types";

export type FormInputProps = FormControlledProps<
	Omit<InputProps, "variant">
> & { isPhone?: boolean };

export function FormInput({
	className,
	name,
	isPhone,
	...props
}: FormInputProps) {
	return (
		<FormControl name={name}>
			{({ ref, error, onChange, ...formProps }) => (
				<Input
					ref={ref}
					className={clsx("w-full min-w-full", className)}
					variant={error ? "error" : "default"}
					{...formProps}
					{...props}
					onChange={(e) => {
						if (isPhone == true) {
							e.target.value = formatPhone(e.target.value);
						}

						void onChange(e);
					}}
				/>
			)}
		</FormControl>
	);
}
