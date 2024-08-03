import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";
import styles from "./Input.module.css";

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} className={clsx(className, styles.input)} {...props} />
    );
  }
);
