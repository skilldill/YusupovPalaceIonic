import { IonContent, IonItem, IonList, IonPage } from "@ionic/react";
import { RoomsStore } from "core/contexts";
import React, { FC } from "react";
import { RoomCard } from "./components";

import styles from "./Rooms.module.css";

interface RoomsProps {
    liked?: boolean
}

export const Rooms: FC<RoomsProps> = ({liked}) => {
    const {rooms} = RoomsStore();

    return (
        <IonPage>
            <IonContent className={styles.rooms} >
                <IonList className={styles.roomsList}>
                    {rooms.map((room, i) => 
                        <RoomCard key={i} room={room} />
                    )}
                </IonList>
            </IonContent>
        </IonPage>
    )
}