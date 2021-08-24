import React, { FC, useCallback } from "react";
import { IonContent, IonPage } from "@ionic/react";

import styles from "./AudioPlayerScreen.module.css";
import { Background } from "shared/components";
import { useModals } from "react-mobile-modals";

interface AudioPlayerScreenProps {
    onClose: () => void;
}

export const AudioPlayerScreen: FC<AudioPlayerScreenProps> = (props) => {
    const {onClose} = props;
    const {closeModal} = useModals();

    const handleClose = useCallback(() => {
        closeModal();
        onClose();
    }, [onClose])

    return (
        <IonPage>
            <div className={styles.navbar}>
                <div className={styles.navbarClose} onClick={handleClose} />
                <div className={styles.navbarLike} />
            </div>

            <IonContent>
                <Background>
                    
                </Background>
            </IonContent>
        </IonPage>
    )
}