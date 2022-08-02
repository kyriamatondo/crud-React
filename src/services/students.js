

export default class Student {
    url = require('./apiConfig.json').baseUrl;
    axios = require('axios');

    constructor() { }

    async fetchAll() {
        return await axios.get(`${url}/student`);
    }

    async save(student) {
        return await axios.post(`${url}/student`, student);
    }

    async update(student) {
        return await axios.put(`${url}/student/${student.id}`, student);
    }

    async delete(id) {
        return await axios.delete(`${url}/student/${id}`);
    }
}