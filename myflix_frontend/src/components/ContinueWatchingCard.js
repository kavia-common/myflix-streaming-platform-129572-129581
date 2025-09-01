import React from 'react';
import { IconMore, IconPlay } from './Icons';
import { usePlayback } from '../state/PlaybackContext';

// PUBLIC_INTERFACE
export default function ContinueWatchingCard({ id, image, title, progress = 0.3, timeLabel = '20m left' }) {
  /** Landscape thumbnail card with progress and playback controls. */
  const { openPlayback } = usePlayback();
  return (
    <div className="cw-card" role="group" aria-label={`${title} continue watching`}>
      <img src={image} alt={`${title} thumbnail`} loading="lazy" />
      <div className="cw-overlay">
        <button className="icon-btn" aria-label="Play" onClick={() => openPlayback({ id, title })} style={{ background: 'rgba(0,0,0,0.6)' }}>
          <IconPlay />
        </button>
      </div>
      <div className="cw-meta">{timeLabel}</div>
      <div className="cw-more">
        <button className="icon-btn" aria-label="More"><IconMore /></button>
      </div>
      <div className="progress" aria-hidden>
        <span style={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }}></span>
      </div>
    </div>
  );
}
