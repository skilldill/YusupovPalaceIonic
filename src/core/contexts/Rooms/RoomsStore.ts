import { useContext } from "react"
import { RoomsContext } from "./RoomsContext"

export const RoomsStore = () => {
    return useContext(RoomsContext);
}