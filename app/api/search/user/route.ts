import { searchUsers } from "@/lib/graphql/github";
import IUser from "@/lib/interfaces/IUser";
import { NextRequest, NextResponse } from "next/server";

function mapResponse(data: any): IUser[] {
  return data?.search?.edges
    ?.filter(({ node }: any) => node && Object.keys(node).length > 0)
    .map(({ node }: any): IUser => {
      return {
        username: node.login,
        name: node.name,
        avatar: node.avatarUrl,
        location: node.location,
        website: node.websiteUrl,
        totalFollower: node.followers?.totalCount,
        totalFollowing: node.following?.totalCount,
        url: node.url,
      };
    });
}

export async function GET(request: NextRequest) {
  const { nextUrl } = request;
  const keyword = nextUrl.searchParams.get("keyword");

  if (!keyword) {
    return NextResponse.json({ error: "Keyword query is null!" }, { status: 422 });
  }

  try {
    const searchUser = await searchUsers(keyword);
    const result = mapResponse(searchUser.data);

    return NextResponse.json({ result, keyword });
  } catch (Error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
