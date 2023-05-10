import IUserRepository from "@/lib/interfaces/IUserRepository";
import Link from "next/link";

export default function RepositoryCard(props: IUserRepository) {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex gap-x-4">
        <div className="min-w-0 flex-auto">
          <Link href={props.url || "#"} target="_blank">
            <p className="text-sm font-semibold leading-6 text-gray-900 underline">{props.name}</p>
          </Link>
          <p className="mt-1 text-xs leading-5 text-gray-500">{props.description}</p>
        </div>
      </div>
    </li>
  );
}
