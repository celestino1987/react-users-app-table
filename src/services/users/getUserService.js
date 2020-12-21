const axios = require('axios');
const userUrl = 'https://reqres.in/api/users'

export default function GetUserById(id) {

    return axios.get(`${userUrl}/${id}`).then((data) => data.data)
}

