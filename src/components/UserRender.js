import React from 'react'


export const UserRender = ({user}) => { // user -> {user}
    if (user.data) {
        return (
            <div >
               
                <div className="dateUser animate__animated animate__fadeInLeft">
            

                    <h3>Apellido:</h3>
                    {user.data.last_name}

                    <h4>Email:</h4>
                    {user.data.email}

                    <h5> URL:</h5>
                    {user.support.url}
                    <h5>Text:</h5>
                    {user.support.text}
                </div>
            </div>
        )
    } else {
        return (
            <h1>Cargando ....</h1>
        )
    }
}
