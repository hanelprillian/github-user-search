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

export const USER_DETAIL_QUERY = `
query UserDetailQuery($username: String!) {
  user(login: $username) {
    name
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
    repositories(last: 20) {
      edges {
        node {
          id
          name
          url
          description
          descriptionHTML
        }
      }
    }
  }
}
`;
