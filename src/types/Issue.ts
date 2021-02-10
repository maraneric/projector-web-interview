import User from "./User";

// Fields that we are interested from the response here:
// https://docs.github.com/en/rest/reference/issues#list-repository-issues
interface Issue {
  id: number;
  url: string;
  user: User;
  title: string;
  state: string;
  body: string;
  created_at: string;
}

export default Issue;
