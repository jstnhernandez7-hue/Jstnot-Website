import { useCounter } from '../../hooks/useCounter'

export default function Counter({ target, suffix = '', prefix = '', duration = 2000, className = '' }) {
  const { ref, value } = useCounter(target, duration)

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  )
}
