export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" aria-hidden className="h-7 w-7">
        <circle cx="16" cy="16" r="15" fill="currentColor" opacity="0.12" />
        <path
          d="M10 21c1.6 1.6 3.6 2.3 6 2.3 3.2 0 5.2-1.6 5.2-3.9 0-5-10.2-2.8-10.2-8 0-2.3 2-3.9 5-3.9 2 0 3.6.6 4.9 1.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="22.5" cy="9.2" r="1.4" fill="#c9a26b" />
      </svg>
      <span className="font-serif text-2xl leading-none tracking-tight">shadraw</span>
    </span>
  );
}
