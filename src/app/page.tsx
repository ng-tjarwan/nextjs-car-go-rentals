import { Button } from "@mantine/core";

import styles from "./page.module.css";

const HomePage = () => {
  return (
    <main>
      Home Page
      <Button className={styles.btn}>Click Me!</Button>
    </main>
  );
};

export default HomePage;
