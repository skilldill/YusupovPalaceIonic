export const getLikedRooms = () => {
    const storageData = localStorage.getItem('likedRooms');

    if (!!storageData) {
        const likedRooms = JSON.parse(storageData);
        return likedRooms;
    } else {
        localStorage.setItem('likedRooms', JSON.stringify([]));
        return [];
    }
}
