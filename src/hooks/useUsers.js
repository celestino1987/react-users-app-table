import { useEffect, useState } from 'react'
import usersService from '../services/users/UsersService'


export function useUsers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        usersService().then((data) => {
            setUsers(data)
        })
    }, [])

    return users
}