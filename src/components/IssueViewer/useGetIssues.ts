import { useState } from "react";
import axios from "axios";
import Issue from "../../types/Issue";

// Regex used to grab the last page number from the "link" response header
const linkHeaderRx = /page=(\d+)&per_page=\d+>;\s+rel="last"/;

const useGetIssues = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const getIssues = async ({
    org,
    repo,
    page,
    pageSize,
  }: {
    org: string;
    repo: string;
    page: number;
    pageSize: number;
  }) => {
    setLoading(true);
    setError(null);
    try {
      // I decided to go with axios because I wanted to use a light-weight data access solution
      // since this is a very simple readonly app. I'm more familiar with apollo graphql but wanted
      // to try out something different for this exercise. I've also had experience with fetch, but
      // it looks like axios is simpler to use since it deals with non-200 responses correctly and
      // parses to json automatically.
      const response = await axios.get<Issue[]>(
        `https://api.github.com/repos/${org}/${repo}/issues?page=${page}&per_page=${pageSize}`
      );
      setIssues(response.data);

      const match = response.headers["link"].match(linkHeaderRx);
      if (match && match.length > 1) {
        setNumberOfPages(parseInt(match[1], 10));
      } else {
        setNumberOfPages(page);
      }
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        setError(e.response.data.message);
      } else {
        setError("Encountered an error fetching the list of issues.");
      }
    }
    setLoading(false);
  };

  // I went for something similar to apollo's useQuery or useLazyQuery here since I'm familiar
  // with those methods.
  return {
    getIssues,
    issues,
    numberOfPages,
    loading,
    error,
    clear: () => setIssues([]),
  };
};

export default useGetIssues;
