export default function SectionMarker({ index, label, light = false }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span
        className={`font-mono text-xs tracking-[0.2em] uppercase ${
          light ? 'text-text-secondary' : 'text-text-secondary'
        }`}
      >
        {index}
      </span>
      <span className={`h-px flex-1 max-w-[60px] ${light ? 'bg-ink-border/40' : 'bg-white/10'}`} />
      <span
        className={`font-mono text-xs tracking-[0.3em] uppercase ${
          light ? 'text-text-secondary' : 'text-text-secondary'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
