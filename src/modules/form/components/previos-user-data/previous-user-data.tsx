import React from "react";

import { Input } from "@/modules/shared/components/controls/input";
import { FieldLabel } from "@/modules/shared/components/form/field-label";

import { LABELS } from "../../constanst";
import {
	type CargoType,
	type FirtStepFormOptions,
	type SecondStepFormOptions,
} from "../../schemas";
import { formatPhoneNumber } from "../../utils/format-phone-number";
import { transformCargoTypeValue } from "../../utils/transform-cargo-type-value";

type CommonKey = keyof (FirtStepFormOptions & SecondStepFormOptions);

const validateKeyValue = ({
	key,
	value,
}: {
	key: CommonKey;
	value: string | number;
}): string | number => {
	if (key === "cargoType") {
		return transformCargoTypeValue({ type: value as CargoType });
	}

	if (key === "phone") {
		return formatPhoneNumber(value as string);
	}

	return value;
};

export interface PreviousUserDataProps<
	T extends FirtStepFormOptions | SecondStepFormOptions,
> {
	data?: T;
}

export const PreviousUserData = <
	T extends FirtStepFormOptions | SecondStepFormOptions,
>({
	data,
}: PreviousUserDataProps<T>) => {
	if (data == undefined) {
		return null;
	}

	return (
		<>
			{Object.entries(data).map(([key, value]) => (
				<FieldLabel key={key} label={LABELS[key as CommonKey]}>
					<Input
						disabled
						value={validateKeyValue({
							key: key as CommonKey,
							value,
						})}
					/>
				</FieldLabel>
			))}
		</>
	);
};
