import React, { FC, useCallback, useEffect, useMemo } from "react";

import { RoomItemModel } from "shared/models/Rooms.models";
import { HeartGrayOutlineSVG, HeartSVG } from "assets";
import styles from "./RoomCard.module.css";
import { RoomsStore } from "core/contexts";
import { useModals } from "react-mobile-modals";
import { Room } from "Screens";
import { useStackNavigation } from "react-mobile-stack-router";

interface RoomCardProps {
    room: RoomItemModel
}

export const RoomCard: FC<RoomCardProps> = ({room}) => {
    const {likeRoom, likedRooms, activeListName} = RoomsStore();

    useEffect(() => {
        console.log(activeListName);
    }, [activeListName])

    const history = useStackNavigation(activeListName);

    const handleLikeRoom = (event: React.MouseEvent) => {
        event.stopPropagation();
        likeRoom(room.id);
    }

    const isLiked = useMemo(() => likedRooms.includes(room.id), [likedRooms, room.id])

    const handleClickCard = useCallback(() => {
        history.push('room', {id: room.id});
    }, [])

    return (
        <div className={styles.roomCard} onClick={handleClickCard}>
            <div 
                className={styles.preview} 
                style={{backgroundImage: `url(${room.preview})`}}
            />
            <div className={styles.content}>
                <p className={styles.title}>{room.name}</p>
                <p className={styles.subTitle}>Комната №{room.id}</p>
                <div 
                    className={styles.likeControl} 
                    style={{backgroundImage: `url(${isLiked ? HeartSVG : HeartGrayOutlineSVG})`}}
                    onClick={handleLikeRoom}
                />
            </div>
        </div>
    )
}