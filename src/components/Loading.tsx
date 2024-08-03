import styles from "./Loading.module.css";
import Image from "next/image";


export function Loading() {
  return (
    <div className={styles.loading}>
      <Image
        src="https://liveblocks.io/loading.svg"
        alt="Loading"
        width={64}
        height={64}
        priority
      />
    </div>
  );
}
