import { IonBadge, IonChip, IonIcon } from "@ionic/react";
import React, { FC, useEffect } from "react";
import {heart} from "ionicons/icons";

import styles from "./Card.module.css";

interface CardProps {
    src: string;
    description: string;
    likes: number;
}

export const Card: FC<CardProps> = (props) => {
    const {src, description, likes} = props;

    useEffect(() => {
        console.log(src);
    }, [])

    return (
        <div className={styles.card}>
            <div 
                className={styles.cardImage} 
                style={{backgroundImage: `url("${src}")`}} 
            />
            <div className={styles.cardControls}>
                <IonBadge color="tertiary">
                    <div className={styles.cardLikes}>
                        <IonIcon icon={heart} size="small" />
                        {likes}
                    </div>
                </IonBadge>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    )
}