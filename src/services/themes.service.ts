import axios from "axios"

class ThemesService {
    private URL = ''

    async getThemesList() {
        const res = await axios.get(`${URL} `)
        return res;
    }

    async selectThemes(studentId: number, themes: string[]) {
        axios.post('',
        {
            studentId: studentId,
            themes: themes,
        },
        {
            headers: {
                "content-type": "application/json"
            }
        })
    }
}

export const themesService = new ThemesService()