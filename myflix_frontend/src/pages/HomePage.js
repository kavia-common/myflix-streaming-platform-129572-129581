import React, { useState } from 'react';
import FilterChips from '../components/FilterChips';
import ContentRow from '../components/ContentRow';
import PosterCard from '../components/PosterCard';
import Top10PosterCard from '../components/Top10PosterCard';
import ContinueWatchingCard from '../components/ContinueWatchingCard';
import { IconPlay, IconPlus } from '../components/Icons';
import { useWatchlist } from '../state/WatchlistContext';
import { usePlayback } from '../state/PlaybackContext';
import {
  getFeatured,
  getTopPicks,
  getTop10,
  getComedy,
  getContinueWatching,
  getBecauseYouWatched,
  getOnlyOn
} from '../services/contentService';

// PUBLIC_INTERFACE
export default function HomePage() {
  /** Home feed showing hero and carousels based on the style guide. */
  const [chip, setChip] = useState('tv');
  const featured = getFeatured();
  const topPicks = getTopPicks();
  const top10 = getTop10();
  const laughs = getComedy();
  const cont = getContinueWatching();
  const because = getBecauseYouWatched();
  const onlyOn = getOnlyOn();
  const { add, has, remove } = useWatchlist();
  const { openPlayback } = usePlayback();

  const chips = [
    { label: 'TV Shows', value: 'tv' },
    { label: 'Movies', value: 'movies' },
    { label: 'Categories ▾', value: 'categories' }
  ];

  const toggleWatchlist = () => {
    if (has(featured.id)) remove(featured.id);
    else add(featured);
  };

  return (
    <div>
      <FilterChips items={chips} value={chip} onChange={setChip} />
      <section className="hero" aria-label="Featured">
        <div
          className="bg"
          style={{ backgroundImage: `url(${featured.image})` }}
        />
        <div className="overlay" />
        <div className="content">
          <h1 style={{ fontSize: 28, fontWeight: 800 }}>{featured.title}</h1>
          <div className="meta">{featured.tags?.map((t) => <span key={t}>{t}</span>)}</div>
          <div className="row-actions">
            <button className="btn btn-primary" onClick={() => openPlayback({ id: featured.id, title: featured.title })}>
              <IconPlay /> Play
            </button>
            <button className="btn" onClick={toggleWatchlist}>
              <IconPlus /> {has(featured.id) ? 'Remove' : 'My List'}
            </button>
          </div>
        </div>
      </section>

      <ContentRow
        title="Today's Top Picks for You"
        items={topPicks}
        renderItem={(item) => <PosterCard {...item} />}
      />
      <ContentRow
        title="Top 10 TV Shows in the U.S. Today"
        items={top10}
        renderItem={(item) => <Top10PosterCard rank={item.rank} {...item} />}
      />
      <ContentRow
        title="30-Minute Laughs"
        items={laughs}
        renderItem={(item) => <PosterCard {...item} />}
      />
      <ContentRow
        title="Continue Watching"
        items={cont}
        renderItem={(item) => <ContinueWatchingCard {...item} />}
      />
      <ContentRow
        title="Because you watched The Madness"
        items={because}
        renderItem={(item) => <PosterCard {...item} />}
      />
      <ContentRow
        title="Only on Netflix"
        items={onlyOn}
        renderItem={(item) => <PosterCard showNetflixBadge {...item} />}
      />
    </div>
  );
}
