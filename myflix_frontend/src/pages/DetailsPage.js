import React from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../services/contentService';
import { useWatchlist } from '../state/WatchlistContext';
import { usePlayback } from '../state/PlaybackContext';
import { IconPlay, IconPlus } from '../components/Icons';

// PUBLIC_INTERFACE
export default function DetailsPage() {
  /** Title details page with hero-style banner, CTAs, and metadata. */
  const { id } = useParams();
  const item = getById(id);
  const { has, add, remove } = useWatchlist();
  const { openPlayback } = usePlayback();

  if (!item) {
    return <div className="form"><h1>Not Found</h1><p className="helper">The requested title does not exist.</p></div>;
  }

  const inList = has(item.id);

  return (
    <div>
      <section className="hero" aria-label="Title Banner">
        <div className="bg" style={{ backgroundImage: `url(${item.image})` }} />
        <div className="overlay" />
        <div className="content">
          <h1 style={{ fontSize: 28, fontWeight: 800 }}>{item.title}</h1>
          <div className="meta">{item.tags?.map((t) => <span key={t}>{t}</span>)}</div>
          <div className="row-actions">
            <button className="btn btn-primary" onClick={() => openPlayback({ id: item.id, title: item.title })}>
              <IconPlay /> Play
            </button>
            <button className="btn" onClick={() => (inList ? remove(item.id) : add(item))}>
              <IconPlus /> {inList ? 'Remove' : 'My List'}
            </button>
          </div>
        </div>
      </section>
      <div className="form">
        <h2>About</h2>
        <p className="helper">This is a mocked details page. Integrate with backend metadata to enrich synopsis, cast, genres, and ratings.</p>
      </div>
    </div>
  );
}
