import { IonContent, IonPage } from "@ionic/react";
import { StartPlayerSVG, StopPlayerSVG } from "assets";
import { Navbar } from "core/components";
import { AudioPlayerStore, RoomsStore } from "core/contexts";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useModals } from "react-mobile-modals";
import { useStackNavigation, useStackParams } from "react-mobile-stack-router";
import { AudioPlayerScreen } from "Screens/AudioPlayer";
import { ApiService } from "shared/api";
import { Background } from "shared/components";
import { RoomModel } from "shared/models/Rooms.models";

import styles from "./Room.module.css";

export const Room = () => {
    const {setAudioData, plaing, play, pause, stop, audioData} = AudioPlayerStore();
    const {activeListName} = RoomsStore();

    const history = useStackNavigation(activeListName);

    const {id} = useStackParams<{id: number}>();

    const [room, setRoom] = useState<RoomModel>();

    const fetchRoom = useCallback(async () => {
        try {
            const {data} = await ApiService.getRoom(id);
            setRoom(data);
        } catch(error) {
            console.log(error);            
        }
    }, [id])

    useEffect(() => {
        fetchRoom();
    }, [])

    useEffect(() => {
        if (!!room) {
            if (audioData?.id !== room.id) {
                stop();
                setAudioData(room);
            }
        }
    }, [room, audioData])

    const handlePlayer = () => {
        if (!!room) {
            if (plaing) {
                pause();
            } else {
                play();
            }
        }
    }

    return (
        <IonPage>
            <Navbar withBack title="Комната" onClose={history.back} />

            <IonContent>
                <Background>
                    {!!room && (
                        <>
                            <div className={styles.roomTop}>
                                <div 
                                    className={styles.roomPhoto}
                                    style={{ backgroundImage: `url(${room.photo})` }}
                                >
                                    <div className={styles.gradientLayer} />
                                </div>
                                    
                                <div className={styles.audioButton} onClick={handlePlayer}>
                                    <div 
                                        className={styles.audioIcon} 
                                        style={{ backgroundImage: `url(${plaing ? StopPlayerSVG : StartPlayerSVG})` }}
                                    />
                                </div>
                            </div>

                            <div className={styles.roomContent}>
                                <p className={styles.title}>{room.name}</p>
                                <p className={styles.subTitle}>Комната № {room.id}</p>
                                <p className={styles.description}>{room.description}</p>
                            </div>
                        </>
                    )}
                </Background>
            </IonContent>
        </IonPage>
    )
}