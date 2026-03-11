import React, { Suspense } from "react";

import { OrdersControls } from "@/modules/order-controls/components/orders-controls";
import { Loading } from "@/modules/shared/components/loading/loading";

import { OrdersList } from "../../components/orders-list";
import { OrdersProvider } from "../../context/orders-context.provider";

export const OrdersPage = () => {
	return (
		<main className="flex flex-col gap-5">
			<Suspense fallback={<Loading />}>
				<OrdersProvider>
					<OrdersControls />
					<OrdersList />
				</OrdersProvider>
			</Suspense>
		</main>
	);
};
