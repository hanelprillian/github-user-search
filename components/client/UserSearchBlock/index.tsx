"use client";

import { useEffect, useState } from "react";
import { UserSearchInput } from "../UserSearchInput";
import IUser from "@/lib/interfaces/IUser";
import UserCard from "@/components/server/UserCard";

async function searchUserRequest(keyword: string) {
  return await (await fetch(`/api/search/user?keyword=${keyword}`)).json();
}

export default function UserSearchBlock() {
  const [keyword, setKeyword] = useState<string>("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function handleSearchUser(keyword: string) {
    if (!keyword || keyword.length < 4) {
      return setUsers([]);
    }

    setLoading(true);
    const { result } = await searchUserRequest(keyword);
    setLoading(false);

    if (!result) {
      return setUsers([]);
    }

    return setUsers(result);
  }

  const fetchingUserState = loading && keyword;
  const userNotFoundState = !loading && keyword && users.length === 0;

  useEffect(() => {
    handleSearchUser(keyword);
  }, [keyword]);

  return (
    <div className="bg-white px-10 py-10 rounded-md w-2/4">
      <div className="mb-10">
        <label className="block text-sm font-medium leading-6 text-gray-900">Search Github User</label>
        <div className="mt-2">
          <UserSearchInput onChange={setKeyword} />
        </div>
      </div>
      {userNotFoundState && (
        <div className="bg-red-100 text-red-500 border-red-500 text-center rounded-sm border text-sm p-3">
          User <strong>{keyword}</strong> Not Found
        </div>
      )}
      {fetchingUserState ? (
        <div className="text-sm p-3 text-gray-900 text-center">Fetching user...</div>
      ) : (
        <ul role="list" className="divide-y divide-gray-100">
          {users.map((user) => (
            <UserCard key={user.username} {...user} />
          ))}
        </ul>
      )}
    </div>
  );
}
