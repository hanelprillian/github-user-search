import IUser from "@/lib/interfaces/IUser";
import Link from "next/link";

export default function UserCard(props: IUser & { isDetail?: boolean }) {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex gap-x-4">
        <Link href={props.url || "#"} target="_blank">
          {props.avatar && <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={props.avatar} alt="" />}
        </Link>

        <div className="min-w-0 flex-auto">
          <Link href={props.url || "#"} target="_blank">
            <p className="text-sm font-semibold leading-6 text-gray-900">{props.name}</p>
          </Link>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{props.username}</p>
          {!props.isDetail && (
            <Link href={`/repository/${props.username}`}>
              <button className="text-gray-800 text-xs font-bold mt-4 underline">View Repositories</button>
            </Link>
          )}
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{props.location}</p>
        <p className="mt-1 text-xs leading-5 text-gray-500">{props.website}</p>
      </div>
    </li>
  );
}
