import { getUser } from "@/lib/graphql/github";
import IUser from "@/lib/interfaces/IUser";
import IUserRepository from "@/lib/interfaces/IUserRepository";
import { NextRequest, NextResponse } from "next/server";

function mapResponse(data: any): IUser | null {
  if (!data) {
    return null;
  }
  const repositories: IUserRepository[] = data?.repositories?.edges
    ?.filter(({ node }: any) => node && Object.keys(node).length > 0)
    .map(({ node }: any): IUserRepository => {
      return {
        name: node.name,
        url: node.url,
        description: node.description,
      };
    });

  return {
    username: data.login,
    name: data.name,
    avatar: data.avatarUrl,
    location: data.location,
    website: data.websiteUrl,
    totalFollower: data.followers?.totalCount,
    totalFollowing: data.following?.totalCount,
    url: data.url,
    repositories,
  };
}

export async function GET(request: NextRequest) {
  const { nextUrl } = request;

  const username = nextUrl.searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username query is null!" }, { status: 422 });
  }

  try {
    const user = await getUser(username);
    const result = mapResponse(user.data.user);

    return NextResponse.json({ result, username });
  } catch (Error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
