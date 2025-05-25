import { JpgResponseType } from "@/app/aws/jpg/api/route";
import PhotoCard from "./PhotoCard";

export default function PhotoGrid({ data }: JpgResponseType) {
  return data.map((photo, idx) => {
    return <PhotoCard photo={photo} key={`${idx}`} />;
  });
}
