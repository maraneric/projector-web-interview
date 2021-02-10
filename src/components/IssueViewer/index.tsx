import React, { useState } from "react";
import "./IssueViewer.css";
import useGetIssues from "./useGetIssues";
import IssueRow from "../IssueRow";
import Pagination from "../Pagination";

function IssuesList() {
  const pageSize = 5;
  const [org, setOrg] = useState("github");
  const [repo, setRepo] = useState("vscode-codeql");
  const [page, setPage] = useState(1);
  const {
    getIssues,
    issues,
    loading,
    error,
    clear,
    numberOfPages,
  } = useGetIssues();

  return (
    <div className="IssueViewer">
      <div className="IssueViewer-input-row">
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
        <div className="IssueViewer-buttons">
          <button
            className="button"
            disabled={loading || !org || !repo}
            onClick={() => getIssues({ org, repo, page, pageSize })}
          >
            Go
          </button>
          <button
            className="button error"
            onClick={() => {
              clear();
              setOrg("");
              setRepo("");
            }}
          >
            Clear
          </button>
        </div>
      </div>

      {error ? (
        <div>{error}</div>
      ) : issues.length ? (
        <>
          <div className="IssueViewer-list">
            {issues.map((issue) => (
              <IssueRow key={issue.id} issue={issue} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            numberOfPages={numberOfPages}
            onSelectPage={(page) => {
              setPage(page);
              getIssues({ org, repo, page, pageSize });
            }}
          />
        </>
      ) : (
        <div>
          Enter the github org and repo name above to view the issues for that
          repository
        </div>
      )}
    </div>
  );
}
export default IssuesList;
