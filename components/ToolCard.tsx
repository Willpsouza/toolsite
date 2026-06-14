interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export default function ToolCard({
  icon,
  title,
  description,
  link,
}: ToolCardProps) {
  return (
    <a
      href={link}
      className="
        group
        relative
        block
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-7
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-blue-200
      "
    >

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          bg-gradient-to-br
          from-blue-50
          via-white
          to-cyan-50
        "
      />

      <div className="relative z-10">

        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-br
            from-blue-600
            to-cyan-500
            flex
            items-center
            justify-center
            text-white
            text-2xl
            mb-5
            shadow-lg
          "
        >
          {icon}
        </div>

        <h3
          className="
            text-2xl
            font-bold
            text-slate-900
            mb-3
          "
        >
          {title}
        </h3>

        <p
          className="
            text-slate-600
            leading-relaxed
            mb-8
          "
        >
          {description}
        </p>

        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              text-blue-600
              font-semibold
            "
          >
            Open Tool
          </span>

          <span
            className="
              text-xl
              text-blue-600
              group-hover:translate-x-1
              transition-transform
            "
          >
            →
          </span>

        </div>

      </div>

    </a>
  );
}