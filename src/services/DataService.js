class DataService {
    _apiBase = 'https://rickandmortyapi.com/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters() {
        const res = this.getResource(`/character/`);
        return res.results;
    }

    getCharacter(id) {
        const res = this.getResource(`/character/${id}`);
        return res.results;
    }
}

const data = new DataService();
data.getAllCharacters().then((body) => {
    console.log(body);
});
