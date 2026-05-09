import React from "react";

export default function NewsCategory() {
  const categoryNews = [
    {
      id: 1,
      category: "Sports",
      title: "Olympic Committee Announces New Sports for 2028 Games",
      excerpt:
        "Breaking, skateboarding, and sport climbing confirmed for Los Angeles Olympics as committee embraces youth-oriented events.",
      time: "1 day ago",
    },
    {
      id: 2,
      category: "Entertainment",
      title: "Streaming Platform Announces Record-Breaking Original Series",
      excerpt:
        "New drama series garners 50 million viewers in first weekend, setting new records for streaming viewership globally.",
      time: "1 day ago",
    },
    {
      id: 3,
      category: "World",
      title: "G20 Summit Focuses on Global Economic Recovery",
      excerpt:
        "Leaders discuss strategies to address inflation, supply chain disruptions, and sustainable economic growth initiatives.",
      time: "2 days ago",
    },
  ];

  return (
    <section className="category-section">
      <div className="category-container">
        <h2 className="section-title">Trending By Category</h2>
        <div className="category-grid">
          {categoryNews.map((news) => (
            <article key={news.id} className="category-item">
              <h3>{news.title}</h3>
              <p>{news.excerpt}</p>
              <time>{news.time}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
