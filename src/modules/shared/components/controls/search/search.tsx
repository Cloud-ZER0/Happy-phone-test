"use client";

import { clsx } from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { useDebounce } from "@/modules/shared/hooks/use-debounce";

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
	const debouncedSearch = useDebounce(search, 300);

	const handleSearchRef = useRef(handleSearch);

	useEffect(() => {
		handleSearchRef.current = handleSearch;
	}, [handleSearch]);

	useEffect(() => {
		handleSearchRef.current(debouncedSearch);
	}, [debouncedSearch]);

	const onChange = (
		e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
	) => {
		setSearch(e.target.value);
	};

	const onClear = useCallback(() => {
		setSearch("");
		handleClearSearch();
	}, [handleClearSearch]);

	return (
		<div
			className={clsx(
				"flex flex-col md:flex-row gap-3.5 items-center",
				className,
			)}
		>
			<Input
				type="text"
				onChange={onChange}
				className="w-full"
				value={search}
				{...props}
			/>
			<div className="flex md:w-fit w-full gap-1.5 items-center">
				<Button
					variant="secondary"
					className=" md:w-fit w-full"
					onClick={onClear}
				>
					Отчистить
				</Button>
			</div>
		</div>
	);
};
