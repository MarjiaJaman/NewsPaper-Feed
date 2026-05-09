import React from "react";

export default function NationalNewsInfo() {
  return (
    <section className="featured-news">
      <article className="featured-main">
        <div className="featured-image">📰 Featured Story</div>
        <div className="featured-content">
          <span className="story-cat-link">Breaking News</span>
          <h2 className="featured-title">
            Major Climate Summit Reaches Historic Agreement on Carbon Emissions
          </h2>
          <p className="featured-excerpt">
            World leaders from 195 countries have signed a groundbreaking
            agreement to reduce global carbon emissions by 50% over the next
            decade. The historic deal marks a turning point in the fight against
            climate change.
          </p>
          <div className="featured-meta">
            <span>By Sarah Johnson</span>
            <span>•</span>
            <span>2 hours ago</span>
          </div>
        </div>
      </article>

      <div className="side-stories">
        <article className="side-story">
          <div className="side-story-image">💼 Business</div>
          <h3>Tech Giant Announces Revolutionary AI Technology</h3>
          <time className="side-story-time">4 hours ago</time>
        </article>

        <article className="side-story">
          <div className="side-story-image">⚽ Sports</div>
          <h3>Championship Final Breaks All-Time Viewership Records</h3>
          <time className="side-story-time">6 hours ago</time>
        </article>
      </div>
    </section>
  );
}
