"use client";

import { ErrorMessage } from "@hookform/error-message";
import { clsx } from "clsx";
import { useFormContext, useFormState } from "react-hook-form";

import { FieldError } from "../field-error";
import { useFormControlContext } from "./hooks";
import { type ChildrenProps, type FormControlProps } from "./types";

export function FormControl({ className, name, children }: FormControlProps) {
	const { control, register, getFieldState } = useFormContext();

	const formState = useFormState({ control, name });

	const { error } = getFieldState(name, formState);

	const formControlContext = useFormControlContext();

	const props: ChildrenProps = {
		...register(name),
		error: error != undefined,
	};

	return (
		<div className={clsx("flex flex-col gap-2.5 ", className)}>
			{children(props)}
			<ErrorMessage
				name={props.name}
				errors={formState.errors}
				render={({ message: rawMessage }) => {
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
					if (rawMessage == undefined) {
						return null;
					}

					const message =
						formControlContext?.getErrorMessage?.(rawMessage) ?? rawMessage;

					if (message.length === 0) {
						return null;
					}

					return <FieldError>{message}</FieldError>;
				}}
			/>
		</div>
	);
}
