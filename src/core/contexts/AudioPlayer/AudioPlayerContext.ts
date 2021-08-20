import {createContext} from "react";
import { RoomModel } from "shared/models/Rooms.models";

interface AudioPlayerContextModel {
    setAudioData: (data: RoomModel) => void;
    audioData: RoomModel | undefined;
    plaing: boolean;
    sound: any;
    play: () => void;
    pause: () => void;
    stop: () => void;
}

export const AudioPlayerContext = createContext<AudioPlayerContextModel>({
    setAudioData: () => {},
    audioData: undefined,
    play: () => {},
    pause: () => {},
    stop: () => {},
    plaing: false,
    sound: undefined,
})

