import PhotoCard from "./PhotoCard";

export default function PhotoGrid({ data }) {
  return data.map((photo, idx) => {
    if (!photo) return;
    return <PhotoCard photo={photo} key={`${idx}`} index={idx} />;
  });
}
