import { urlWithParams } from "../url-params";

const GITHUB_ENDPOINT = process.env.GITHUB_API_URL;

export async function searchUsers(keyword: string) {
  return await (
    await fetch(
      urlWithParams(`${GITHUB_ENDPOINT}/search/users`, {
        q: keyword,
      })
    )
  ).json();
}
