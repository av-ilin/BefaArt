class ImgAPI {
    static async get(path) {
        const url = new URL(path);
        const response = await fetch(url);
        const blob = await response.blob();
        const img = URL.createObjectURL(blob);
        return img;
    }
}

export default ImgAPI;
