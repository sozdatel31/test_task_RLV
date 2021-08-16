import axios from 'axios'

const setInstance = () => axios.create({
    baseURL: `https://reqres.in/api/users?per_page=12`,
})

//===api===v
export const appAPI = {
    getPicture() {
        return setInstance().get(``)
    }
}