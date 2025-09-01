import React from 'react';
import { useNavigate } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function PosterCard({ id, image, title, showNetflixBadge = false }) {
  /** 2:3 poster card with optional Netflix badge and hover elevation. */
  const navigate = useNavigate();
  return (
    <button
      className="poster-card"
      onClick={() => navigate(`/details/${id}`)}
      aria-label={`Open details for ${title}`}
      title={title}
    >
      {showNetflixBadge && <span className="badge-n" aria-hidden>N</span>}
      <img src={image} alt={title} loading="lazy" />
    </button>
  );
}
