import React from "react";

import { OrderPageContent } from "../../components/order-page-content";

interface Params {
	params: Promise<{ id: string }>;
}

export const OrderPage = async ({ params }: Params) => {
	const { id } = await params;
	return (
		<main>
			<OrderPageContent id={id} />
		</main>
	);
};
