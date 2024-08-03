import { useOthers, useSelf } from "@liveblocks/react/suspense";
import styles from "./Avatars.module.css";
import { IUserInfo } from "@liveblocks/client";
import Image from "next/image";

export function Avatars() {
  const users = useOthers();
  const currentUser = useSelf();

  return (
    <div className={styles.avatars}>
      {users.map(({ connectionId, info }: { connectionId: number; info: IUserInfo }) => {
        return (
          <Avatar key={connectionId} picture={info.picture?.toString() ?? ""} name={info.name?.toString() ?? ""} />
        );
      })}

      {currentUser && (
        <div className="relative ml-8 first:ml-0">
          <Avatar
            picture={(currentUser?.info as { picture?: string })?.picture || ""}
            name={(currentUser?.info as { name?: string })?.name || ""}
          />
        </div>
      )}
    </div>
  );
}

export function Avatar({ picture, name }: { picture: string; name: string }) {
  return (
    <div className={styles.avatar} data-tooltip={name}>
      <Image
        alt={name}
        src={picture}
        className={styles.avatar_picture}
        data-tooltip={name}
        width={36}
        height={36}
        objectFit="cover"
      />
    </div>
  );
}
