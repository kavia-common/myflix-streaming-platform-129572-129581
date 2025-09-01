import React from 'react';
import { usePlayback } from '../state/PlaybackContext';
import { IconMore } from './Icons';

// PUBLIC_INTERFACE
export default function PlaybackModal() {
  /** Modal that simulates playback using a placeholder video element. */
  const { isOpen, closePlayback, current } = usePlayback();

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Playback Modal">
      <div className="modal-card">
        <button className="icon-btn modal-close" aria-label="Close" onClick={closePlayback}>✕</button>
        <video
          controls
          autoPlay
          style={{ width: '100%', height: '100%', background: '#000' }}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
        />
        <div style={{ position: 'absolute', left: 8, bottom: 8, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
          <strong>{current?.title || 'Now Playing'}</strong>
          <button className="icon-btn" aria-label="More"><IconMore /></button>
        </div>
      </div>
    </div>
  );
}
