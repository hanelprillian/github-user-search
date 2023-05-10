import { graphqlFetch } from "../../graphql-fetch";
import { USER_SEARCH_QUERY } from "./query";

export function searchUsers(keyword: string) {
  return graphqlFetch(USER_SEARCH_QUERY, {
    keyword,
  });
}
