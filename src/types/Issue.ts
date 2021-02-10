import User from "./User";
import Label from "./Label";

// Fields that we are interested from the response here:
// https://docs.github.com/en/rest/reference/issues#list-repository-issues
interface Issue {
  id: number;
  number: number;
  html_url: string;
  user: User;
  title: string;
  state: string;
  body: string;
  created_at: string;
  updated_at: string;
  author_association: string;
  labels: Label[];
}

export default Issue;
