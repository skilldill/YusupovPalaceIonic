import {createContext} from "react";
import { RoomItemModel } from "shared/models/Rooms.models";

interface RoomsContextModel {
    rooms: RoomItemModel[];
    likedRooms: number[];
    activeListName: string;
    
    setActiveListName: (listName: string) => void;
    likeRoom: (id: number) => void;
}

export const RoomsContext = createContext<RoomsContextModel>({
    rooms: [],
    likedRooms: [],
    activeListName: 'all',

    setActiveListName: () => {},
    likeRoom: () => {},
})