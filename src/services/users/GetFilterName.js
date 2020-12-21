

export function filteringUsersService(filterValue = undefined, users) {
    if(!filterValue) {
        return users
    }
        return users.filter((user) => user.first_name.toLowerCase() === filterValue.toLowerCase())
}   
  

