export default function MarqueeStrip({ items, className = '' }) {
  const doubled = [...items, ...items]

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-0 hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-6 font-mono text-xs tracking-[0.25em] uppercase text-text-secondary whitespace-nowrap"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
