"use client";

import { ChangeEventHandler, useMemo, useState } from "react";
import { IUserSearchInput } from "./type";

export function UserSearchInput({ onSearch }: IUserSearchInput) {
  const [keyword, setKeyword] = useState<string>("");
  const results = useMemo(() => {}, [keyword]);

  function handleKeywordChange(value: string) {
    setKeyword(value);
  }

  return (
    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">github.com/</span>
      <input
        type="text"
        name="keyword"
        onChange={(event) => handleKeywordChange(event.target.value)}
        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="hanelprillian"
      />
    </div>
  );
}
