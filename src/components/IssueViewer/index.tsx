import React, { useState } from "react";
import useGetIssues from "./useGetIssues";
import IssueRow from "../IssueRow";
import Pagination from "../Pagination";
import Issue from "../../types/Issue";
import InputsRow from "./InputsRow";
import IssueCard from "../IssueCard";

function IssueViewer() {
  const pageSize = 20;
  const [org, setOrg] = useState("");
  const [repo, setRepo] = useState("");
  const [page, setPage] = useState(1);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const {
    getIssues,
    issues,
    loading,
    error,
    clear,
    numberOfPages,
  } = useGetIssues();

  if (selectedIssue) {
    return (
      <IssueCard issue={selectedIssue} onClose={() => setSelectedIssue(null)} />
    );
  }

  return (
    <div className="IssueViewer">
      <InputsRow
        org={org}
        onOrgChanged={setOrg}
        repo={repo}
        onRepoChanged={setRepo}
        onGo={() => {
          if (!loading && org && repo) {
            getIssues({ org, repo, page, pageSize });
          }
        }}
        onClear={() => {
          clear();
          setOrg("");
          setRepo("");
        }}
        loading={loading}
      />

      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <p>loading...</p>
      ) : issues ? (
        issues.length ? (
          <>
            <div className="Card">
              {issues.map((issue) => (
                <IssueRow
                  key={issue.id}
                  issue={issue}
                  onSelect={() => setSelectedIssue(issue)}
                />
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
          <p>No issues found in that repo. Try another one.</p>
        )
      ) : (
        <p>
          Enter the github org and repo name above to view the issues for that
          repository
        </p>
      )}
    </div>
  );
}
export default IssueViewer;
