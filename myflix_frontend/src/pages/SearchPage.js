import React, { useMemo, useState } from 'react';
import { searchContent } from '../services/contentService';
import PosterCard from '../components/PosterCard';

// PUBLIC_INTERFACE
export default function SearchPage() {
  /** Content search with immediate results list. */
  const [q, setQ] = useState('');
  const results = useMemo(() => searchContent(q), [q]);

  return (
    <div className="form" aria-label="Search">
      <h1>Search</h1>
      <div className="field">
        <label htmlFor="query">Find Movies & Shows</label>
        <input id="query" className="input" placeholder="Search titles..." value={q} onChange={(e)=>setQ(e.target.value)} />
      </div>
      <div className="row">
        <h2 className="row-title">Results</h2>
        <div className="carousel" role="list">
          {results.map(item => (
            <div key={item.id} role="listitem">
              <PosterCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
