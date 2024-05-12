import PhotoCard from "./PhotoCard";

interface Props {
  data: (
    | {
        category: string;
        content: string;
        src: string;
      }
    | undefined
  )[];
}

export default function PhotoGrid({ data }: Props) {
  return data.map((photo, idx) => {
    if (!photo) return;
    return <PhotoCard photo={photo} key={`${idx}`} index={idx} />;
  });
}
