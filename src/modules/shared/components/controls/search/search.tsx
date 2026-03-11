"use client";

import { clsx } from "clsx";
import React, { useState } from "react";

import { Button } from "../button";
import { Input, type InputProps } from "../input";

export interface SearchProps extends Omit<
	InputProps,
	"type" | "onChane" | "value"
> {
	handleSearch: (search: string) => void;
	handleClearSearch: () => void;
	className?: string;
	value: string;
}

export const Search = ({
	handleClearSearch,
	handleSearch,
	className,
	value,
	...props
}: SearchProps) => {
	const [search, setSearch] = useState(value);

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
	) => {
		setSearch(e.target.value);
	};

	const applySearch = () => {
		handleSearch(search);
	};

	const onClear = () => {
		setSearch("");
		handleClearSearch();
	};

	return (
		<div className={clsx("flex gap-3.5 items-center", className)}>
			<Input
				type="text"
				onChange={onChange}
				className="w-full"
				value={search}
				{...props}
			/>
			<div className="flex gap-1.5 items-center">
				<Button onClick={applySearch} className="w-fit">
					Поиск
				</Button>
				<Button className="w-fit" onClick={onClear}>
					Отчистить
				</Button>
			</div>
		</div>
	);
};
