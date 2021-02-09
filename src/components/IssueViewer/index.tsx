import React, { useState } from "react";
import "./IssueViewer.css";
import useGetIssues from "./useGetIssues";
import IssueRow from "../IssueRow";

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
        autoFocus={true}
      />
      <input
        placeholder="repo"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
      />
      <button disabled={loading || !org || !repo} onClick={() => getIssues()}>
        Go
      </button>
      {issues.length ? (
        <div className="IssueViewer-list">
          {issues.map((issue) => (
            <IssueRow key={issue.id} issue={issue} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default IssuesList;
