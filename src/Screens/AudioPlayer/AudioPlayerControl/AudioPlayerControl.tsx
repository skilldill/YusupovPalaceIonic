import { StartPlayerSVG, StopPlayerSVG } from "assets";
import { AudioPlayerStore } from "core/contexts";
import React, { useState } from "react";
import { useModals } from "react-mobile-modals";
import { AudioPlayerScreen } from "../AudioPlayerScreen";

import styles from "./AudioPlayerControl.module.css";

export const AudioPlayerControl = () => {
    const {stoped, audioData, play, pause, plaing} = AudioPlayerStore();
    const {openModal} = useModals();

    const [openedScreen, setOpenedScreen] = useState(false);

    if (stoped) {
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
        setOpenedScreen(true);

        openModal({ 
            component: <AudioPlayerScreen onClose={() => setOpenedScreen(false)}/>, 
            openDirection: 'vertical' 
        })
    }

    return (
        <div 
            className={styles.control} 
            onClick={handleOpenAudioPlayer}
            style={{display: openedScreen ? 'none' : 'flex'}}
        >
            <div className={styles.controlInfo}>
                <div className={styles.controlPreview} style={{backgroundImage: `url(${audioData!.photo})`}} />
                
                <div>
                    <p className={styles.title}>{audioData!.name}</p>
                    <p className={styles.subTitle}>Комната №{audioData!.id}</p>
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