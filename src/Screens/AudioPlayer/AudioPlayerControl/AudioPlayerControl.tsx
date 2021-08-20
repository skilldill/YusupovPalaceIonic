import { StartPlayerSVG, StopPlayerSVG } from "assets";
import { AudioPlayerStore } from "core/contexts";
import React from "react";
import { useModals } from "react-mobile-modals";
import { AudioPlayerScreen } from "../AudioPlayerScreen";

import styles from "./AudioPlayerControl.module.css";

export const AudioPlayerControl = () => {
    const {sound, audioData, play, pause, plaing} = AudioPlayerStore();
    const {openModal} = useModals();

    if (!audioData) {
        return null;
    }

    const handlePlayer = (event: React.MouseEvent) => {
        event.stopPropagation();

        if (plaing) {
            pause();
        } else {
            play();
        }
    }

    const handleOpenAudioPlayer = () => {
        console.log(openModal);
        openModal({ 
            component: <AudioPlayerScreen />, 
            openDirection: 'vertical' 
        })
    }

    return (
        <div className={styles.control} onTouchEnd={handleOpenAudioPlayer}>
            <div className={styles.controlInfo}>
                <div className={styles.controlPreview} style={{backgroundImage: `url(${audioData.photo})`}} />
                
                <div>
                    <p className={styles.title}>{audioData.name}</p>
                    <p className={styles.subTitle}>Комната №{audioData.id}</p>
                </div>
            </div>

            <div className={styles.audioButton} onClick={handlePlayer}>
                <div 
                    className={styles.audioIcon} 
                    style={{backgroundImage: `url(${plaing ? StopPlayerSVG : StartPlayerSVG})`}} 
                />
            </div>
        </div>
    )
}