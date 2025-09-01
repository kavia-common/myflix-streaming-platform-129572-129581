import React from 'react';
import { useWatchlist } from '../state/WatchlistContext';
import PosterCard from '../components/PosterCard';

// PUBLIC_INTERFACE
export default function WatchlistPage() {
  /** Shows user's saved titles with quick access to details. */
  const { watchlist } = useWatchlist();
  return (
    <div className="row">
      <h1 className="row-title">My List</h1>
      <div className="carousel" role="list">
        {watchlist.length === 0 ? (
          <div className="helper" style={{ paddingLeft: 16 }}>Your list is empty. Add titles from Home or Details pages.</div>
        ) : watchlist.map(item => (
          <div role="listitem" key={item.id}>
            <PosterCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
