import { IonContent, IonItem, IonList, IonPage, IonSpinner } from "@ionic/react";
import { Navbar } from "core/components";
import { RoomsStore } from "core/contexts";
import React, { FC, useMemo } from "react";
import { Background, LoaderScreen } from "shared/components";
import { RoomCard } from "./components";

import styles from "./Rooms.module.css";

interface RoomsProps {
    liked?: boolean
}

export const Rooms: FC<RoomsProps> = ({liked}) => {
    const {rooms, likedRooms} = RoomsStore();

    const prepareRooms = useMemo(() => liked ? 
        rooms.filter((room) => likedRooms.includes(room.id)) :
        rooms, [rooms, liked])

    return (
        <IonPage>
            <Navbar title="Комнаты" />

            <IonContent className={styles.rooms} >
                <Background>
                    {!!prepareRooms.length ? (
                        <IonList className={styles.roomsList}>
                            {prepareRooms.map((room, i) => 
                                <RoomCard key={i} room={room} />
                            )}
                        </IonList>
                    ): <LoaderScreen />}
                </Background>
            </IonContent>
        </IonPage>
    )
}