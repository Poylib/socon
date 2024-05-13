import PhotoCard from "./PhotoCard";

export default function PhotoGrid({ data }) {
  return data.map((photo, idx) => {
    return <PhotoCard photo={photo} key={`${idx}`} index={idx} />;
  });
}
