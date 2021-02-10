import React from "react";
import UserAvatar from "../UserAvatar";
import Issue from "../../types/Issue";
import "./IssueRow.css";
import { format, formatRelative, parseISO } from "date-fns";

function IssueRow({ issue, onSelect }: { issue: Issue; onSelect: () => void }) {
  const createdAt = parseISO(issue.created_at);
  return (
    <div className="IssueRow" onClick={onSelect}>
      <UserAvatar user={issue.user} />
      <div className="IssueRow-details">
        <div className="IssueRow-title ellipses" title={issue.title}>
          {issue.title}
        </div>
        <small>
          opened by {issue.user.login}{" "}
          <span title={format(createdAt, "MM/dd/yyyy h:mm:ss a")}>
            {formatRelative(createdAt, new Date())}
          </span>
        </small>
      </div>
    </div>
  );
}

export default IssueRow;
