"use client";

import { useContext } from "react";

import { FormContext } from "./form-context";

export const useFormContext = () => {
	const form = useContext(FormContext);
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (form === undefined) {
		throw new Error("useFormContext must be used within a provider");
	}
	return form;
};
