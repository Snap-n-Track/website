import Link from 'next/link'
import clsx from 'clsx'

export function PlayStoreLink({ color = 'black' }) {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.snapandtrack.android"
      aria-label="Get it on Google Play"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'black'
          ? 'bg-gray-800 text-white hover:bg-gray-900'
          : 'bg-white text-gray-900 hover:bg-gray-50'
      )}
    >
      {/* A simple, accessible Google Play style badge (monochrome to match AppStoreLink). */}
      <div className="flex items-center h-10 px-3">
        {/* Play icon */}
        <svg
          className="h-6 w-6 flex-none"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5.14c0-.887.959-1.433 1.73-.985l9.02 5.21c.78.45.78 1.52 0 1.97l-9.02 5.21A1.13 1.13 0 0 1 8 15.77V5.14Z" />
        </svg>
        <span className="ml-2 text-sm font-semibold tracking-wide">
          Get it on Google Play
        </span>
      </div>
    </Link>
  )
}
