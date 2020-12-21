import React from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CardUser from '../components/CardUser'

export const DataUser = () => {
    
    return (
        <div className="cajaPadre animate__animated animate__fadeInLeft">
         <Link className="link-2" to={'/'}> <ArrowBackIcon /> </Link>
        <CardUser />
        </div>
    )
}
