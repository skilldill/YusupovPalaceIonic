import { API_URLS } from "shared/constants";
import { http } from "./http";

export class ApiService {
    static getRooms() {
        return http.get(API_URLS.rooms);
    }

    static getRoom(id: number) {
        const url = API_URLS.room.replace(':id', id.toString());
        return http.get(url);
    }
}