import React from "react";

import styles from "./LoaderScreen.module.css";
import { Spinner } from "../Spinner";

export const LoaderScreen = () => (
    <div className={styles.loaderScreen}>
        <Spinner />
    </div>
)