import React from "react";

import { RemoveOrderModalProvider } from "../../components/modals/remove-order-modal";
import { OrderPageContent } from "../../components/order-page-content";

interface Params {
	params: Promise<{ id: string }>;
}

export const OrderPage = async ({ params }: Params) => {
	const { id } = await params;
	return (
		<main className="w-full min-h-dvh flex justify-center items-center p-6">
			<RemoveOrderModalProvider>
				<OrderPageContent id={id} />
			</RemoveOrderModalProvider>
		</main>
	);
};
