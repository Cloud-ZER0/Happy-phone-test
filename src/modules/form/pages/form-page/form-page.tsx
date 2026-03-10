import React from "react";

import { Form } from "../../components/form/form";
import { FormProvider } from "../../context/form-context.provider";

export const FormPage = () => {
	return (
		<main>
			<FormProvider>
				<Form />
			</FormProvider>
		</main>
	);
};
