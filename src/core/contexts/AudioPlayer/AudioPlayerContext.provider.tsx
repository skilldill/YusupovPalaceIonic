import React, { FC, useEffect, useState } from "react";
import { RoomModel } from "shared/models/Rooms.models";
import { AudioPlayerContext } from "./AudioPlayerContext";

export const AudioPlayerProvider: FC = ({children}) => {
    const [audioData, setAudioData] = useState<RoomModel>();
    const [sound, setSound] = useState<HTMLAudioElement>();
    const [plaing, setPlaing] = useState(false);

    useEffect(() => {
        if (!!audioData) {
            const audioSound = new Audio(audioData?.audio);
            setSound(audioSound);
        }
    }, [audioData])

    const handlePlay = () => {
        if (!!sound) {
            sound.play();
            setPlaing(true);
        }
    }

    const handlePause = () => {
        if (!!sound) {
            sound.pause();
            setPlaing(false);
        }
    }

    const handleStop = () => {
        if (!!sound) {
            sound.pause();
            setSound(undefined);
            setPlaing(false);
        }
    }

    const values = {
        setAudioData,
        audioData,
        plaing,
        sound,
        
        play: handlePlay,
        pause: handlePause,
        stop: handleStop,
    }

    return (
        <AudioPlayerContext.Provider value={values}>
            {children}
        </AudioPlayerContext.Provider>
    )
}