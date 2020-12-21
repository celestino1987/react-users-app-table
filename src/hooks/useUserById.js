import { useEffect, useState } from 'react'
import GetUserById from '../services/users/getUserService'

export const useUserById = (id) => {

  const [state, setState] = useState([])

  useEffect(() => {
    GetUserById(id).then((data) => {
      console.log(data)
      setState(data)
    })
  }, [id])

  return state
}
