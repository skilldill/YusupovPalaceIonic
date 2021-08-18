import React, { FC } from "react";
import { useModals } from "react-mobile-modals";

import styles from "./Navbar.module.css";

interface NavbarProps {
    title: string,
    withBack?: boolean
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {title, withBack} = props;

    const {closeModal} = useModals();

    return (
        <div className={styles.navbar}>
            {withBack && <div className={styles.arrowBack} onClick={closeModal} />}
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}