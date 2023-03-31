class BefaAPI {
    static PATH = "https://av-ilin.github.io/api/befa/data.json";

    static async get() {
        const url = new URL(BefaAPI.PATH);
        const response = await fetch(url);
        let data = await response.json();
        return data;
    }
}

export default BefaAPI;
