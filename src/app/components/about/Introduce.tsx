export default function Introduce() {
  const person = [
    {
      name: "한지훈",
      en: "HAN ji hoon",
    },
    {
      name: "22",
      en: "ff",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between pt-[70px]">
      <h2 className="mb-8 text-2xl" style={{ letterSpacing: 2 }}>
        MEMBER
      </h2>
      <div>
        {person.map((el, idx) => (
          <div key={`${idx}`}>
            <div></div>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
