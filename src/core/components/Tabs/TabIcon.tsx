import React, { FC, useMemo } from "react";
import {IonIcon} from "@ionic/react";

import styles from "./Tabs.module.css";

interface TabIconProps {
    icon: string;
    active?: boolean;
    title?: string
}   

export const TabIcon: FC<TabIconProps> = (props) => {
    const {icon, active, title} = props;

    const activeColor = useMemo(() => active ? '#fff' : '#999', [active]);

    return (
        <div className={styles.tabIcon}>
            <div style={{ backgroundImage: `url("${icon}")` }}/>
            {!!title && <small style={{ color: activeColor }}>{title}</small>}
        </div>
    )
}