import React, { FC } from "react";
import styles from "./Background.module.css";

export const Background: FC = ({children}) => <div className={styles.background}>{children}</div>