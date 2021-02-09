import User from "./User";
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
