import { graphqlFetch } from "../../graphql-fetch";
import { USER_DETAIL_QUERY, USER_SEARCH_QUERY } from "./query";

export function searchUsers(keyword: string) {
  return graphqlFetch(USER_SEARCH_QUERY, {
    keyword,
  });
}

export function getUser(username: string) {
  return graphqlFetch(USER_DETAIL_QUERY, {
    username,
  });
}
