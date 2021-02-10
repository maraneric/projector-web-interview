import React from "react";
import "./InputsRow.css";

const InputsRow = ({
  org,
  onOrgChanged,
  repo,
  onRepoChanged,
  loading,
  onGo,
  onClear,
}: {
  org: string;
  onOrgChanged: (org: string) => void;
  repo: string;
  onRepoChanged: (repo: string) => void;
  loading: boolean;
  onGo: () => void;
  onClear: () => void;
}) => (
  <div className="InputsRow">
    <input
      placeholder="Org name"
      value={org}
      onChange={(e) => onOrgChanged(e.target.value)}
      autoFocus={true}
    />
    <input
      placeholder="Repo name"
      value={repo}
      onChange={(e) => onRepoChanged(e.target.value)}
    />
    <div className="IssueViewer-buttons">
      <button
        className="button"
        disabled={loading || !org || !repo}
        onClick={onGo}
      >
        Go
      </button>
      <button className="button error" onClick={onClear}>
        Clear
      </button>
    </div>
  </div>
);

export default InputsRow;
