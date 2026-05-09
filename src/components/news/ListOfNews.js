import React from "react";

export default function ListOfNews() {
  const newsArticles = [
    {
      id: 1,
      category: "Technology",
      title: "Quantum Computing Breakthrough Could Revolutionize Encryption",
      excerpt:
        "Researchers have achieved a major milestone in quantum computing that could transform cybersecurity.",
      author: "Alex Chen",
      time: "3 hours ago",
    },
    {
      id: 2,
      category: "Health",
      title: "New Study Links Daily Exercise to Improved Mental Health",
      excerpt:
        "Scientists discover compelling evidence that regular physical activity significantly reduces anxiety and depression.",
      author: "Dr. Emily Roberts",
      time: "5 hours ago",
    },
    {
      id: 3,
      category: "Business",
      title: "Electric Vehicle Sales Surge 40% in Global Markets",
      excerpt:
        "EV adoption accelerates as prices drop and charging infrastructure expands worldwide.",
      author: "Michael Torres",
      time: "7 hours ago",
    },
    {
      id: 4,
      category: "Science",
      title: "NASA Discovers Potential Signs of Water on Distant Exoplanet",
      excerpt:
        "New telescope data reveals promising evidence of water vapor in the atmosphere of a habitable-zone planet.",
      author: "Jennifer Park",
      time: "9 hours ago",
    },
    {
      id: 5,
      category: "Politics",
      title: "International Trade Agreement Signed by Major Economic Powers",
      excerpt:
        "Historic deal aims to reduce tariffs and promote global economic cooperation.",
      author: "David Kumar",
      time: "10 hours ago",
    },
    {
      id: 6,
      category: "Environment",
      title: "Ocean Cleanup Project Removes Record Amount of Plastic",
      excerpt:
        "Innovative technology successfully extracts 100 tons of plastic waste from Pacific Ocean.",
      author: "Maria Santos",
      time: "12 hours ago",
    },
  ];

  return (
    <section className="news-grid">
      <h2 className="section-title">Latest News</h2>
      <div className="news-cards">
        {newsArticles.map((article) => (
          <article key={article.id} className="news-card">
            <div className="news-card-image">📄 {article.category}</div>
            <div className="news-card-content">
              <span className="news-card-category">{article.category}</span>
              <h4>{article.title}</h4>
              <p>{article.excerpt}</p>
              <div className="news-card-footer">
                <span>{article.author}</span>
                <span>{article.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
