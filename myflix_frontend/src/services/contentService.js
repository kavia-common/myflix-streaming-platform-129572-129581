const posters = [
  { id: '1', title: 'The Madness', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600&auto=format&fit=crop', tags: ['Suspenseful', 'Thriller', 'Conspiracy'], onlyOn: true },
  { id: '2', title: 'Laugh Riot', image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=600&auto=format&fit=crop', tags: ['Comedy', '30-Minute Laughs'] },
  { id: '3', title: 'Top Show', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop', tags: ['Top 10'] },
  { id: '4', title: 'Space Journey', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop', tags: ['Sci-Fi'] },
  { id: '5', title: 'Mystery House', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=600&auto=format&fit=crop', tags: ['Mystery'] },
  { id: '6', title: 'City Lights', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop', tags: ['Drama'] },
  { id: '7', title: 'Ocean Deep', image: 'https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=600&auto=format&fit=crop', tags: ['Documentary'] },
  { id: '8', title: 'Fast Wheels', image: 'https://images.unsplash.com/photo-1515924152587-22cab577d0e1?q=80&w=600&auto=format&fit=crop', tags: ['Action'] },
  { id: '9', title: 'Dreamscape', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop', tags: ['Fantasy'] },
  { id: '10', title: 'Ancient Secrets', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=600&auto=format&fit=crop', tags: ['History'] },
];

const continueWatching = [
  { id: 'cw1', title: 'The Madness', image: posters[0].image, progress: 0.6, timeLabel: '40m left' },
  { id: 'cw2', title: 'Space Journey', image: posters[3].image, progress: 0.25, timeLabel: '15m left' },
];

export function getFeatured() {
  return { ...posters[0] };
}

export function getTopPicks() {
  return posters.slice(1, 9);
}

export function getTop10() {
  return posters.slice(0, 10).map((p, idx) => ({ ...p, rank: idx + 1 }));
}

export function getComedy() {
  return posters.filter(p => p.tags.includes('30-Minute Laughs') || p.tags.includes('Comedy'));
}

export function getContinueWatching() {
  return continueWatching;
}

export function getBecauseYouWatched() {
  return posters.slice(4, 10);
}

export function getOnlyOn() {
  return posters.filter(p => p.onlyOn);
}

// PUBLIC_INTERFACE
export function searchContent(query) {
  /** Search titles by case-insensitive substring match. */
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return posters.filter(p => p.title.toLowerCase().includes(q));
}

// PUBLIC_INTERFACE
export function getById(id) {
  /** Retrieve a single item by id. */
  return posters.find(p => p.id === id) || getTop10().find(p => p.id === id);
}
