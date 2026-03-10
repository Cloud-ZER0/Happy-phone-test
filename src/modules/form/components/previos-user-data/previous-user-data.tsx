import React from "react";

import { Input } from "@/modules/shared/components/controls/input";
import { FieldLabel } from "@/modules/shared/components/form/field-label";

import { LABELS } from "../../constanst";
import { type CargoType, type CommonKey, type FormFields } from "../../schemas";
import { formatPhoneNumber } from "../../utils/format-phone-number";
import { transformCargoTypeValue } from "../../utils/transform-cargo-type-value";

const formatters: Partial<Record<CommonKey, (v: unknown) => string | number>> =
	{
		phone: (v) => formatPhoneNumber(String(v)),
		cargoType: (v) => transformCargoTypeValue({ type: v as CargoType }),
	};

const DISPLAY_FIELDS: CommonKey[] = [
	"phone",
	"cargoType",
	"weight",
	"from",
	"to",
	"name",
	"reciverName",
];

export const PreviousUserData = ({ data }: { data?: FormFields }) => {
	if (data == undefined) {
		return null;
	}

	return (
		<>
			{DISPLAY_FIELDS.map((key) => {
				const value = data[key];
				const label = LABELS[key];

				if (value === "") {
					return null;
				}

				const formatter = formatters[key];
				const displayValue = formatter != undefined ? formatter(value) : value;

				return (
					<FieldLabel key={key} label={label}>
						<Input disabled value={displayValue} className="w-full" />
					</FieldLabel>
				);
			})}
		</>
	);
};
