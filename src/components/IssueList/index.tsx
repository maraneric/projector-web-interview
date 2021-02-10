import React from "react";
import Issue from "../../types/Issue";
import IssueRow from "../IssueRow";

const IssueList = ({
  issues,
  onSelectIssue,
}: {
  issues: Issue[];
  onSelectIssue: (issue: Issue) => void;
}) => (
  <div className="Card">
    {issues.map((issue) => (
      <IssueRow
        key={issue.id}
        issue={issue}
        onSelect={() => onSelectIssue(issue)}
      />
    ))}
  </div>
);

export default IssueList;
