import React from 'react';
import PosterCard from './PosterCard';

// PUBLIC_INTERFACE
export default function Top10PosterCard({ rank, ...rest }) {
  /** Poster with oversized translucent numeral per Top-10 design. */
  return (
    <div style={{ position: 'relative' }}>
      <div className="badge-top10" aria-hidden>{rank}</div>
      <PosterCard {...rest} />
    </div>
  );
}
