import React, { FC, useEffect, useState } from "react";

import {RoomsContext} from "./RoomsContext";
import { RoomItemModel } from "shared/models/Rooms.models";
import { ApiService } from "shared/api";
import { getLikedRooms } from "shared/utils/Storage.utils";

export const RoomsProvider: FC = ({children}) => {
    const [rooms, setRooms] = useState<RoomItemModel[]>([]);
    const [likedRooms, setLikedRooms] = useState<number[]>([]);
    const [activeListName, setActiveListName] = useState("all");

    const fetchRooms = async () => {
        try {
            const {data} = await ApiService.getRooms();
            setRooms(data);
        } catch(error) {
            console.log(error);
        }
    }

    const likeRoom = (id: number) => {
        const storageLikedRooms = getLikedRooms();
        const isLiked = storageLikedRooms.includes(id);
        
        let updatedLikedRooms: number [] = [];

        if (isLiked) {
            updatedLikedRooms = storageLikedRooms.filter((likedId: number) => likedId !== id);
            
        } else {
            updatedLikedRooms = [...likedRooms, id];
        }

        localStorage.setItem('likedRooms', JSON.stringify(updatedLikedRooms));
        setLikedRooms(updatedLikedRooms);
    }

    useEffect(() => {
        fetchRooms();

        const storageLikedRooms = getLikedRooms();
        setLikedRooms(storageLikedRooms);
    }, [])

    const values = {
        rooms,
        likedRooms,
        likeRoom,
        activeListName,
        setActiveListName
    }

    return (
        <RoomsContext.Provider value={values}>
            {children}
        </RoomsContext.Provider>
    )
}