const axios = require('axios');
const usersUrl = 'https://reqres.in/api/users?per_page=20'

export default function GetUsers() {

    return axios.get(usersUrl).then((data) => data.data)
}