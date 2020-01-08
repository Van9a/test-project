export default class DataService {
    _apiBase = 'https://rickandmortyapi.com/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource(`/character/`);
        return res.results;
    }

    async getCharacter(id) {
        return await this.getResource(`/character/${id}`);
    }
}
