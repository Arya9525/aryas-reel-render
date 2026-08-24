export function Wave({
  fill = "var(--background)",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none w-full leading-[0] ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full sm:h-[90px] lg:h-[120px]"
      >
        <path
          d="M0,64 C240,128 480,0 720,32 C960,64 1200,128 1440,72 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
