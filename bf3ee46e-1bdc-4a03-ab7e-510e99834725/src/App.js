import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [sort, setSort] = useState("");
  const handleSorter = (e) => {
    const { id } = e.target;
    setSort(id);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          id="most-upvoted-link"
          data-testid="most-upvoted-link"
          className="small"
          onClick={handleSorter}
        >
          Most Upvoted
        </button>
        <button
          id="most-recent-link"
          data-testid="most-recent-link"
          className="small"
          onClick={handleSorter}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articles} sort={sort} />
    </div>
  );
}

export default App;
