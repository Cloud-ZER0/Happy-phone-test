import React from "react";

import { Form } from "../../components/form/form";
import { FormProvider } from "../../context/form-context.provider";

export const FormPage = () => {
	return (
		<main className="w-full min-h-dvh flex justify-center items-center p-6">
			<FormProvider>
				<Form />
			</FormProvider>
		</main>
	);
};
