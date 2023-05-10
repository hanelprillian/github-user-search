"use client";
import { useEffect, useState } from "react";
import IUser from "@/lib/interfaces/IUser";
import UserCard from "@/components/server/UserCard";
import RepositoryCard from "@/components/server/RepositoryCard";
import Link from "next/link";

async function getUser(username: string) {
  const response = await fetch(`/api/user?username=${username}`);
  if (!response.ok) return undefined;
  return response.json();
}

export default function UserDetailBlock({ username }: { username: string }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const userNotFoundState = !loading && !user;

  async function handleGetUser() {
    setLoading(true);
    const { result } = await getUser(username);
    setLoading(false);

    if (!result) {
      return setUser(null);
    }

    setUser(result);
  }
  useEffect(() => {
    handleGetUser();
  }, []);

  function NotFoundBlock() {
    return userNotFoundState ? (
      <div className="bg-red-100 text-red-500 border-red-500 text-center rounded-sm border text-sm p-3">
        User <strong>{username}</strong> Not Found
      </div>
    ) : (
      <></>
    );
  }

  function UserBlock() {
    if (!user) {
      return <></>;
    }

    return (
      <>
        <ul role="list" className="divide-y divide-gray-100">
          <UserCard isDetail key={user.username} {...user} />
        </ul>
        <hr className="my-5" />
        <h2 className="text-gray-900">Repositories</h2>
        <ul role="list" className="divide-y divide-gray-100">
          {user.repositories?.map((repo) => (
            <RepositoryCard {...repo} />
          ))}
        </ul>
      </>
    );
  }

  return (
    <div className="bg-white px-5 py-5 md:px-10 md:py-10 rounded-md w-full lg:w-2/4">
      <div className="mb-10">
        <label className="block text-sm font-medium leading-6 text-gray-900">Detail User & Repositories</label>
      </div>
      <NotFoundBlock />
      {loading ? <div className="text-sm p-3 text-gray-900 text-center">Fetching user...</div> : <UserBlock />}
      <Link href="/" className="text-gray-900 mt-10 underline">
        Back to list
      </Link>
    </div>
  );
}
