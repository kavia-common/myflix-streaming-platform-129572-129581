import React from 'react';

// PUBLIC_INTERFACE
export default function ContentRow({ title, items, renderItem }) {
  /** Labeled horizontal carousel row; supports custom item renderer. */
  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>
      <div className="carousel" role="list">
        {items.map((item, idx) => (
          <div role="listitem" key={item.id ?? idx}>
            {renderItem(item, idx)}
          </div>
        ))}
      </div>
    </section>
  );
}
