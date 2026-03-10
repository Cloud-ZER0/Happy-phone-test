"use client";

import { useContext } from "react";

import { FormControlContext } from "./context";

export function useFormControlContext() {
	return useContext(FormControlContext);
}
