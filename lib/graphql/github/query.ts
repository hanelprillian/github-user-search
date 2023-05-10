export const USER_SEARCH_QUERY = `
query UserSearchQuery($keyword: String!) {
  search(query: $keyword, type: USER, first: 5) {
    edges {
      node {
        ... on User {
          login
          name
          avatarUrl
          location
          websiteUrl
          following {
            totalCount
          }
          followers {
            totalCount
          }
          websiteUrl
          url
        }
      }
    }
  }
}
`;
