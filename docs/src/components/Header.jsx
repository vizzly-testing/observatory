export function Header() {
  return (
    <header
      className="h-16 border-b border-[#374151] sticky top-0 z-50 backdrop-blur-xl"
      style={{ backgroundColor: 'rgba(26, 35, 50, 0.95)' }}
    >
      <div className="h-full px-6 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 text-white font-semibold text-lg hover:no-underline group"
        >
          {/* Observatory Logo - Hexagon with crosshairs */}
          <div className="relative">
            <svg
              width="36"
              height="36"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform group-hover:scale-105"
            >
              {/* Outer hexagon ring */}
              <path
                d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
                stroke="#f59e0b"
                strokeWidth="3"
                fill="none"
                className="opacity-60"
              />
              {/* Inner hexagon */}
              <path
                d="M50 20L75 35V65L50 80L25 65V35L50 20Z"
                stroke="#f59e0b"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Center circle */}
              <circle cx="50" cy="50" r="12" fill="#f59e0b" />
              {/* Crosshairs */}
              <line
                x1="50"
                y1="10"
                x2="50"
                y2="25"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="50"
                y1="75"
                x2="50"
                y2="90"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="15"
                y1="50"
                x2="30"
                y2="50"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="70"
                y1="50"
                x2="85"
                y2="50"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Observatory
          </span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-amber-500/70 ml-1">
            Docs
          </span>
        </a>

        <div className="flex items-center gap-5">
          {/* Version badge */}
          <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
            v1.0.0
          </span>

          {/* GitHub link */}
          <a
            href="https://github.com/vizzly-testing/vizzly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800/50 rounded-lg"
            aria-label="View on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
