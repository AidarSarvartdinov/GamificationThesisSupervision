import axios from "axios";

class UserService {
    private URL = '';

    async getStudentById(id: number) {
        const res = await axios.get(`${this.URL} ${id}`)
        return res
    }

    async getStudents(id: number) {
        const res = await axios.get(`${this.URL} ${id}`,);
        return res;
    }

    async getProfessorsWorks(id: number) {
        const res = await axios.get(`${this.URL} ${id}`)
        return res;
    }
}

export const userService = new UserService();
