import Carousel from "./components/main/Carousel";
import TopScroll from "./components/main/TopScroll";

export default function Home() {
  return (
    <>
      <main className="pt-[20vh] bg-black">
        <TopScroll />
        <Carousel />
      </main>
    </>
  );
}
