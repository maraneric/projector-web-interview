import React, { useState } from "react";
import "./IssueViewer.css";
import useGetIssues from "./useGetIssues";

function IssuesList() {
  const [org, setOrg] = useState("");
  const [repo, setRepo] = useState("");
  const { getIssues, issues, loading, error } = useGetIssues(org, repo, 1, 20);

  return (
    <div className="IssueViewer">
      <input
        placeholder="org"
        value={org}
        onChange={(e) => setOrg(e.target.value)}
      />
      <input
        placeholder="repo"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
      />
      <button disabled={loading || !org || !repo} onClick={() => getIssues()}>
        Go
      </button>
      {issues && issues.map((issue) => <div key={issue.id}>{issue.url}</div>)}
    </div>
  );
}
export default IssuesList;
