import { type CommonKey } from "../schemas";

export const FORM_STORAGE_KEY = "form";

export const LABELS: Record<CommonKey, string> = {
	cargoType: "Тип груза",
	from: "Город отправления",
	to: "Город назначения",
	name: "Имя",
	phone: "Телефон",
	reciverName: "Имя получателя",
	weight: "Вес, кг",
};
