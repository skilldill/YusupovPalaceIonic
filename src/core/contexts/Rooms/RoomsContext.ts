import {createContext} from "react";
import { RoomItemModel } from "shared/models/Rooms.models";

interface RoomsContextModel {
    rooms: RoomItemModel[];
    likedRooms: number[];
    likeRoom: (id: number) => void;
}

export const RoomsContext = createContext<RoomsContextModel>({
    rooms: [],
    likedRooms: [],
    likeRoom: () => {}
})