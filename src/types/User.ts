// Fields that we are interested from the response here:
// https://docs.github.com/en/rest/reference/issues#list-repository-issues
interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export default User;
