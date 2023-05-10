import UserDetailBlock from "@/components/client/UserDetailBlock";
import { notFound } from "next/navigation";

interface IRepositoryPage {
  params: {
    user: string;
  };
}
export default async function RepositoryPage({ params }: IRepositoryPage) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-24">
      <UserDetailBlock username={params.user} />
    </main>
  );
}
