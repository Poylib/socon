import Carousel from "./components/main/Carousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
    </main>
  );
}
