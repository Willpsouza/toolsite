interface AdBannerProps {
  height?: string;
}

export default function AdBanner({
  height = "h-32",
}: AdBannerProps) {
  return (
    <div className="my-10">
      <div
        className={`
          bg-white
          border
          border-dashed
          border-slate-300
          rounded-2xl
          ${height}
          flex
          items-center
          justify-center
          shadow-sm
        `}
      >
        <span className="text-slate-500 font-medium">
          Google AdSense
        </span>
      </div>
    </div>
  );
}