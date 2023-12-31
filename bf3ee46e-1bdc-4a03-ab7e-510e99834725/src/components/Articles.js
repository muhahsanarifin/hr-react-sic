import React from "react";

function Articles({ articles, sort }) {

  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sort
            ? articles
                .sort((a, b) =>
                  sort === "most-upvoted-link"
                    ? b.upvotes.toString() - a.upvotes.toString()
                    : b.date < a.date
                    ? -1
                    : 1
                )
                ?.map((article, idx) => (
                  <tr data-testid="article" key={idx}>
                    <td data-testid="article-title">{article.title}</td>
                    <td data-testid="article-upvotes">
                      {article.upvotes.toString()}
                    </td>
                    <td data-testid="article-date">{article.date}</td>
                  </tr>
                ))
            : articles?.map((article, idx) => (
                <tr data-testid="article" key={idx}>
                  <td data-testid="article-title">{article.title}</td>
                  <td data-testid="article-upvotes">
                    {article.upvotes.toString()}
                  </td>
                  <td data-testid="article-date">{article.date}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
