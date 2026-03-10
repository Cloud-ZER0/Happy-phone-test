import React from "react";

import { Input } from "@/modules/shared/components/controls/input";
import { FieldLabel } from "@/modules/shared/components/form/field-label";

import { LABELS } from "../../constanst";
import {
	type CargoType,
	type FirtStepFormOptions,
	type SecondStepFormOptions,
} from "../../schemas";

const transformCargoTypeValue = ({ type }: { type: CargoType }): string => {
	switch (type) {
		case "document": {
			return "Документы";
		}
		case "fragile": {
			return "Хрупкое";
		}
		case "regular": {
			return "Обычное";
		}
	}
};

interface PreviousUserDataProps<
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
				<FieldLabel
					key={key}
					label={
						LABELS[key as keyof (FirtStepFormOptions | SecondStepFormOptions)]
					}
				>
					<Input
						disabled
						value={
							key === "cargoType"
								? transformCargoTypeValue({ type: value as CargoType })
								: value
						}
					/>
				</FieldLabel>
			))}
		</>
	);
};
