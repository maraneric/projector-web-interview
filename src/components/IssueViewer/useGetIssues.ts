import { useState, useCallback } from "react";
import axios, { AxiosError } from "axios";
import Issue from "../../types/Issue";

const useGetIssues = (
  org: string,
  repo: string,
  page: number,
  pageSize: number
) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>();

  const getIssues = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<Issue[]>(
        `https://api.github.com/repos/${org}/${repo}/issues`
      );
      setIssues(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, [org, repo, page, pageSize]);

  return { getIssues, loading, issues, error };
};

export default useGetIssues;
