"use client";

import { createModalContextProvider } from "@/modules/shared/components/overlays/modal/modal.helpers";

const [RemoveOrderModalProvider, useRemoveOrderModalContext] =
	createModalContextProvider();

// eslint-disable-next-line react-refresh/only-export-components
export { RemoveOrderModalProvider, useRemoveOrderModalContext };
