import React, { useState } from "react";
import useGetIssues from "./useGetIssues";
import IssueList from "../IssueList";
import Pagination from "../Pagination";
import Issue from "../../types/Issue";
import InputsRow from "../InputsRow";
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

  // Since this is an extremely simple app, I'm just saving the selected issue on the
  // main IssueViewer component. If an issue is selected, show just that issue. If not,
  // then show the inputs, issue list, and pagination controls.
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
            <IssueList issues={issues} onSelectIssue={setSelectedIssue} />
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
