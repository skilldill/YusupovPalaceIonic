import React, { FC } from "react";

import styles from "./Navbar.module.css";

interface NavbarProps {
    title: string,
    withBack?: boolean
    onClose?: () => void;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {title, withBack, onClose} = props;

    const handleClose = () => {
        !!onClose && onClose();
    }

    return (
        <div className={styles.navbar}>
            {withBack && <div className={styles.arrowBack} onClick={handleClose} />}
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}