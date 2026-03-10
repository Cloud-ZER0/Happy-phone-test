import { type CargoType } from "../schemas";

export const transformCargoTypeValue = ({
	type,
}: {
	type: CargoType;
}): string => {
	switch (type) {
		case "document": {
			return "Документы";
		}
		case "fragile": {
			return "Хрупкое";
		}
		case "regular": {
			return "Обычное";
		}
	}
};
