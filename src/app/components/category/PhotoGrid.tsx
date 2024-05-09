import Image from "next/image";

export default function PhotoGrid({ data }) {
  return data.map((photo, idx) => (
    <div className="relative h-[20%] w-[100%]" key={idx}>
      <Image
        src={photo}
        fill={true}
        style={{ objectFit: "cover" }}
        alt="photo"
      />
    </div>
  ));
}
