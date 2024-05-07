import useMainAnimation from "@/store/useMainAnimation";

export default function MainFooter() {
  const { currentColor } = useMainAnimation();
  return (
    <>
      <div className="absolute bottom-0 flex items-center justify-between px-3 w-full h-8">
        <span
          className="transition-colors duration-2000 font-semibold text-[8px] md:text-xs"
          style={{ color: currentColor }}
        >
          © 2024 SOCON ㅣSOCON Co.,Ltd.ㅣ최정은 한지훈ㅣBUSINESS NO.
          796-87-02906
        </span>
      </div>
    </>
  );
}
