export default function Logo() {
  return (
    <div className="flex items-center gap-4">

      <div className="relative">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-br
            from-blue-600
            via-cyan-500
            to-sky-400
            shadow-xl
            shadow-blue-500/30
            flex
            items-center
            justify-center
            rotate-3
          "
        >

          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
          >

            <path
              d="M7 7H17V17H7V7Z"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M12 4V7"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            <path
              d="M12 17V20"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            <path
              d="M4 12H7"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            <path
              d="M17 12H20"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

          </svg>

        </div>

        <div
          className="
            absolute
            -right-1
            -top-1
            w-3
            h-3
            rounded-full
            bg-emerald-400
            border-2
            border-white
          "
        />

      </div>

      <div>

        <div className="text-2xl font-extrabold tracking-tight text-slate-900">

          Tool
          <span className="text-blue-600">
            Nest
          </span>

        </div>

        <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">

          Free Online Tools

        </div>

      </div>

    </div>
  );
}