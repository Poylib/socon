import PhotoCard from "./PhotoCard";

interface Props {
  data: {
    thumbnail: string | undefined;
    category: string;
    content: string;
    src: string;
  }[];
}

export default function PhotoGrid({ data }: Props) {
  return data.map((photo, idx) => <PhotoCard photo={photo} key={`${idx}`} />);
}
