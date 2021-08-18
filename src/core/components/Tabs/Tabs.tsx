import React, { FC, useState } from "react";

import styles from "./Tabs.module.css";

export const Tabs: FC = (props) => {
    const {children} = props;

    const [active, setActive] = useState(0);

    return (
        <div className={styles.tabs}>
            {(children as any[])[active]}
            <div className={styles.tabbar}>
                <div className={styles.tabbarContent}>
                    {(children as any[]).map((tab, i) => 
                        <div key={i} onClick={() => setActive(i)}>
                            {i === active ? tab.props.titleActive : tab.props.title}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}