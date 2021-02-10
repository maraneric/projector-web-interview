import React from "react";
import Issue from "../../types/Issue";
import "./IssueCard.css";
import { format, parseISO } from "date-fns";
import Label from "./Label";

const formatDate = (date: string) =>
  format(parseISO(date), "MM/dd/yyyy h:mm:ss a");

const IssueCard = ({
  issue,
  onClose,
}: {
  issue: Issue;
  onClose: () => void;
}) => (
  <div className="Card IssueCard">
    <h2 className="IssueCard-title">
      #{issue.number}: {issue.title}
    </h2>
    <p className="IssueCard-body">{issue.body}</p>
    <dl>
      <dt>Opened by:</dt>
      <dd>
        <a href={issue.user.html_url} target="_blank" rel="noreferrer">
          {issue.user.login}
        </a>{" "}
        <small>[{issue.author_association}]</small>
      </dd>
      <dt>Opened at:</dt>
      <dd>{formatDate(issue.created_at)}</dd>
      <dt>Updated at:</dt>
      <dd>{formatDate(issue.updated_at)}</dd>
      {issue.labels.length ? (
        <>
          <dt>Labels:</dt>
          <dd>
            {issue.labels.map((label) => (
              <Label key={label.id} label={label} />
            ))}
          </dd>
        </>
      ) : null}
    </dl>
    <div className="IssueCard-button-row">
      <a href={issue.html_url} target="_blank" rel="noreferrer">
        view on github
      </a>
      <button className="button error" onClick={onClose}>
        Back
      </button>
    </div>
  </div>
);

export default IssueCard;
