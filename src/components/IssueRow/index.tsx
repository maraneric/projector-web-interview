import React from "react";
import UserAvatar from "../UserAvatar";
import Issue from "../../types/Issue";
import "./IssueRow.css";

function IssueRow({ issue }: { issue: Issue }) {
  return (
    <div className="IssueRow">
      <UserAvatar user={issue.user} />
      <div className="IssueRow-details">
        <div className="IssueRow-title ellipses">{issue.title}</div>
        <small>opened by {issue.user.login}</small>
      </div>
    </div>
  );
}

export default IssueRow;
