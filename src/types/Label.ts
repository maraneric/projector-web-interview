// Fields that we are interested from the response here:
// https://docs.github.com/en/rest/reference/issues#list-repository-issues
interface Label {
  id: number;
  name: string;
  color: string;
}

export default Label;
