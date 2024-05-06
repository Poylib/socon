import useMainAnimation from "@/store/useMainAnimation";

export default function MainFooter() {
  const { currentColor } = useMainAnimation();
  return (
    <div className="absolute bottom-0 flex items-center justify-between px-3 w-full h-12">
      <span
        className="text-xs transition-colors duration-2000 font-semibold"
        style={{ color: currentColor }}
      >
        © 2024 SOCON
      </span>
    </div>
  );
}
