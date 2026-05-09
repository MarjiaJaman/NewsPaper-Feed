import React from "react";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { category } = useParams();

  const categoryNews = {
    national: [
      {
        id: 1,
        title: "Government Announces New Infrastructure Development Plan",
        excerpt:
          "A comprehensive $50 billion plan aims to modernize national highways, bridges, and public transportation systems across the country.",
        author: "John Smith",
        time: "2 hours ago",
      },
      {
        id: 2,
        title: "National Education Reform Bill Passes Parliament",
        excerpt:
          "Landmark legislation promises to increase funding for public schools and introduce new curriculum standards nationwide.",
        author: "Emma Wilson",
        time: "4 hours ago",
      },
      {
        id: 3,
        title: "Healthcare System Receives Major Funding Boost",
        excerpt:
          "Federal government allocates additional resources to reduce wait times and improve medical facilities across the nation.",
        author: "Dr. James Patterson",
        time: "6 hours ago",
      },
      {
        id: 4,
        title: "National Park System Expands with Three New Protected Areas",
        excerpt:
          "Conservation efforts result in designation of new protected lands, preserving critical ecosystems and wildlife habitats.",
        author: "Lisa Green",
        time: "8 hours ago",
      },
      {
        id: 5,
        title: "Supreme Court Rules on Landmark Privacy Case",
        excerpt:
          "Historic decision sets new precedent for digital privacy rights and data protection in the modern age.",
        author: "Robert Chen",
        time: "1 day ago",
      },
      {
        id: 6,
        title: "National Employment Rates Reach Five-Year High",
        excerpt:
          "Latest statistics show strong job growth across multiple sectors, with unemployment at lowest level since 2021.",
        author: "Angela Martinez",
        time: "1 day ago",
      },
    ],
    world: [
      {
        id: 1,
        title: "International Space Station Welcomes New Research Team",
        excerpt:
          "Astronauts from six countries arrive for groundbreaking experiments in microgravity and space medicine.",
        author: "Maria Santos",
        time: "3 hours ago",
      },
      {
        id: 2,
        title: "European Union Launches Green Energy Initiative",
        excerpt:
          "Ambitious plan aims to achieve carbon neutrality by 2040 through renewable energy investments and policy reforms.",
        author: "Pierre Dubois",
        time: "5 hours ago",
      },
      {
        id: 3,
        title: "Asian Economic Summit Focuses on Regional Trade",
        excerpt:
          "Leaders from 20 nations discuss strategies to strengthen economic cooperation and reduce trade barriers.",
        author: "Yuki Tanaka",
        time: "7 hours ago",
      },
      {
        id: 4,
        title: "United Nations Addresses Global Food Security",
        excerpt:
          "Emergency session convenes to tackle food shortages and agricultural challenges affecting developing nations.",
        author: "Ahmed Hassan",
        time: "9 hours ago",
      },
      {
        id: 5,
        title: "Antarctic Research Reveals Alarming Ice Melt Rates",
        excerpt:
          "New data from international research teams shows accelerated melting patterns requiring urgent climate action.",
        author: "Dr. Sofia Andersen",
        time: "1 day ago",
      },
      {
        id: 6,
        title:
          "Global Health Organization Reports Progress on Disease Prevention",
        excerpt:
          "Vaccination programs show significant success in reducing infectious diseases across multiple continents.",
        author: "Dr. Raj Patel",
        time: "1 day ago",
      },
    ],
    business: [
      {
        id: 1,
        title: "Tech Giants Report Record Quarterly Earnings",
        excerpt:
          "Major technology companies exceed market expectations with strong revenue growth driven by AI and cloud services.",
        author: "Michael Chang",
        time: "1 hour ago",
      },
      {
        id: 2,
        title: "Stock Market Reaches All-Time High",
        excerpt:
          "Major indices surge as investor confidence grows amid positive economic indicators and corporate performance.",
        author: "Sarah Goldman",
        time: "3 hours ago",
      },
      {
        id: 3,
        title: "Startup Secures $500M in Series C Funding",
        excerpt:
          "AI-powered healthcare platform attracts major investment from venture capital firms and strategic partners.",
        author: "David Lee",
        time: "5 hours ago",
      },
      {
        id: 4,
        title: "Major Merger Creates Industry Leader",
        excerpt:
          "Two Fortune 500 companies announce $80 billion merger expected to reshape telecommunications landscape.",
        author: "Jennifer Brooks",
        time: "7 hours ago",
      },
      {
        id: 5,
        title: "Cryptocurrency Market Shows Strong Recovery",
        excerpt:
          "Digital assets gain momentum as institutional investors increase allocation to blockchain technologies.",
        author: "Alex Thompson",
        time: "10 hours ago",
      },
      {
        id: 6,
        title: "Retail Sales Surge During Holiday Season",
        excerpt:
          "Consumer spending reaches new heights as e-commerce and traditional stores report exceptional performance.",
        author: "Karen White",
        time: "12 hours ago",
      },
    ],
    technology: [
      {
        id: 1,
        title: "Breakthrough in Quantum Computing Announced",
        excerpt:
          "Researchers achieve major milestone with stable quantum processor capable of 1,000 qubits operation.",
        author: "Dr. Kevin Park",
        time: "2 hours ago",
      },
      {
        id: 2,
        title: "New AI Model Demonstrates Human-Like Reasoning",
        excerpt:
          "Advanced artificial intelligence system shows unprecedented ability to solve complex problems and explain its logic.",
        author: "Rachel Kim",
        time: "4 hours ago",
      },
      {
        id: 3,
        title: "5G Network Coverage Expands to Rural Areas",
        excerpt:
          "Telecommunications companies complete infrastructure rollout bringing high-speed connectivity to underserved regions.",
        author: "Marcus Johnson",
        time: "6 hours ago",
      },
      {
        id: 4,
        title: "Revolutionary Battery Technology Doubles EV Range",
        excerpt:
          "New solid-state batteries promise 800-mile range and 10-minute charging for next generation electric vehicles.",
        author: "Dr. Lisa Anderson",
        time: "8 hours ago",
      },
      {
        id: 5,
        title: "Social Media Platform Introduces Privacy-First Features",
        excerpt:
          "Major update gives users unprecedented control over personal data and content visibility settings.",
        author: "Tom Rodriguez",
        time: "10 hours ago",
      },
      {
        id: 6,
        title: "Augmented Reality Glasses Launch for Consumers",
        excerpt:
          "Lightweight AR glasses bring virtual information overlay to everyday life with all-day battery performance.",
        author: "Nina Patel",
        time: "1 day ago",
      },
    ],
    sports: [
      {
        id: 1,
        title: "Championship Game Sets Viewership Records",
        excerpt:
          "Historic final draws 150 million viewers worldwide, becoming most-watched sporting event of the year.",
        author: "Chris Martinez",
        time: "3 hours ago",
      },
      {
        id: 2,
        title: "Olympic Athlete Breaks 30-Year-Old World Record",
        excerpt:
          "Stunning performance shatters long-standing record in 100-meter sprint at international athletics meet.",
        author: "Jessica Turner",
        time: "5 hours ago",
      },
      {
        id: 3,
        title: "Major League Announces Expansion Teams",
        excerpt:
          "League confirms addition of two new franchises in growing markets, bringing total teams to 34.",
        author: "Brian Foster",
        time: "7 hours ago",
      },
      {
        id: 4,
        title: "Tennis Star Wins Career Grand Slam",
        excerpt:
          "Victory at final major tournament completes historic achievement, joining elite group of champions.",
        author: "Amanda Rice",
        time: "9 hours ago",
      },
      {
        id: 5,
        title: "Team Clinches Division Title with Perfect Record",
        excerpt:
          "Undefeated season culminates in championship berth, setting new standard for sports excellence.",
        author: "Mike Sullivan",
        time: "12 hours ago",
      },
      {
        id: 6,
        title: "Rookie Player Named League MVP",
        excerpt:
          "First-year sensation breaks multiple records and earns prestigious award in unprecedented debut season.",
        author: "Kelly Adams",
        time: "1 day ago",
      },
    ],
    entertainment: [
      {
        id: 1,
        title: "Blockbuster Film Crosses $1 Billion Globally",
        excerpt:
          "Summer release becomes fastest movie to reach billion-dollar milestone in just 10 days of theatrical run.",
        author: "Lauren Scott",
        time: "2 hours ago",
      },
      {
        id: 2,
        title: "Music Festival Announces Star-Studded Lineup",
        excerpt:
          "Annual event reveals headliners featuring biggest names in music across multiple genres and generations.",
        author: "DJ Miller",
        time: "4 hours ago",
      },
      {
        id: 3,
        title: "Streaming Series Sweeps Award Ceremony",
        excerpt:
          "Original drama takes home eight major awards including best series, writing, and acting honors.",
        author: "Olivia Bennett",
        time: "6 hours ago",
      },
      {
        id: 4,
        title: "Celebrity Couple Announces Surprise Collaboration",
        excerpt:
          "Power duo teams up for highly anticipated project combining music, fashion, and philanthropy.",
        author: "Ryan Cooper",
        time: "8 hours ago",
      },
      {
        id: 5,
        title: "Video Game Launch Breaks Sales Records",
        excerpt:
          "Anticipated title generates $800 million in first-day sales, setting new industry benchmark.",
        author: "Jason Wu",
        time: "11 hours ago",
      },
      {
        id: 6,
        title: "Broadway Show Extends Run After Sold-Out Season",
        excerpt:
          "Critical and commercial success leads to extended performances through next year due to overwhelming demand.",
        author: "Natalie Hughes",
        time: "1 day ago",
      },
    ],
  };

  const categoryTitles = {
    national: "National News",
    world: "World News",
    business: "Business News",
    technology: "Technology News",
    sports: "Sports News",
    entertainment: "Entertainment News",
  };

  const news = categoryNews[category] || [];
  const title = categoryTitles[category] || "News";

  return (
    <div className="category-page">
      <section className="news-grid">
        <h2 className="section-title">{title}</h2>
        <div className="news-cards">
          {news.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-card-image">📰 {title}</div>
              <div className="news-card-content">
                <span className="news-card-category">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
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
    </div>
  );
}
