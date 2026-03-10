import { clsx } from "clsx";

import { Input, type InputProps } from "../../controls/input";
import { FormControl } from "../form-control/form-control";
import { type FormControlledProps } from "../form-control/types";

export interface FormCheckboxInputProps extends FormControlledProps<
	Omit<InputProps, "variant" | "type">
> {
	label: {
		title: string;
		className?: string;
		ctClassName?: string;
	};
}

const checkboxStyles = {
	root: "relative flex items-center gap-2.5 pt-4 border-t-2 border-[#F3F4FA]",
	checkbox: [
		"peer",
		"relative w-6 h-6 min-w-6 p-0",
		"border-2 border-[#E0E2F0] rounded-[5px]",
		"appearance-none bg-white",
		"transition-colors duration-300",
		"disabled:bg-[#E6EAFF]",
		"not-disabled:checked:border-transparent not-disabled:checked:bg-[#1F2D86]",
		"not-disabled:not-checked:hover:bg-[#F3F4FA]",
	].join(" "),
	icon: [
		"pointer-events-none absolute left-[4px] top-[4px]",
		"opacity-0 transition-opacity duration-300",
		"max-md:top-[11px]",
		"peer-checked:opacity-100",
	].join(" "),
	label: [
		"font-sans text-base font-medium leading-relaxed",
		"text-[#777777] cursor-pointer",
	].join(" "),
	error: "border-[#CC1616] bg-[#FFF3F3]",
};

export function FormCheckboxInput({
	className,
	name,
	label,
	...props
}: FormCheckboxInputProps) {
	return (
		<FormControl name={name}>
			{({ ref, error, ...formProps }) => (
				<div className={clsx(checkboxStyles.root, label.ctClassName)}>
					<div className="relative">
						<Input
							ref={ref}
							id={name}
							className={clsx(
								checkboxStyles.checkbox,
								error && checkboxStyles.error,
								className,
							)}
							variant={error ? "error" : "default"}
							type="checkbox"
							{...formProps}
							{...props}
						/>

						<svg
							className={checkboxStyles.icon}
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12.8623 3.86152C13.1225 3.60144 13.5443 3.60155 13.8046 3.86152C14.065 4.12187 14.065 4.54453 13.8046 4.80488L6.47163 12.1379C6.21133 12.3982 5.78961 12.3981 5.52925 12.1379L2.19526 8.80488C1.93491 8.54453 1.93491 8.12187 2.19526 7.86152C2.45561 7.60117 2.87827 7.60117 3.13862 7.86152L5.99995 10.7238L12.8623 3.86152Z"
								fill="white"
							/>
						</svg>
					</div>
					<label
						htmlFor={name}
						className={clsx(checkboxStyles.label, label.className)}
					>
						{label.title}
					</label>
				</div>
			)}
		</FormControl>
	);
}
