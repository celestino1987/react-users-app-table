import {useEffect,useState} from 'react'
import { useUsers } from './useUsers'


export const useFilter = () => {
  user = useUsers()

  const defaultState = {
    users: [],
    copyUsers: []
}
     const [state,setState] = useState(defaultState )
              
     useEffect(()=>{
      setState({users: users.data, copyUsers: users.data});
     },[])

    return state
}