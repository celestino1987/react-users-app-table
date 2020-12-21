import React, { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Input, FormControl, InputLabel, FormHelperText, Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import { Link, useHistory } from "react-router-dom";
import { useUsers } from '../hooks/useUsers';

import { filteringUsersService } from '../services/users/GetFilterName'
import { getSort } from '../services/users/getSort';


// Valor temporal, sustituir por useeffect para solo ejecutar 1 vez//
const styles = makeStyles({
    table: {
        minWidth: 650
    },
});

export const CreandoTabla = () => {

    const history = useHistory()
    //Filtrado  de personas//
    const defaultState = {
        users: [],
        copyUsers: []
    }
    const [state, setState] = useState(defaultState)
    const users = useUsers()

    useEffect(() => {
        setState({ users: users.data, copyUsers: users.data });

    }, [users.data])

    function filteringUsers(value = undefined) {
        setState({ ...state, users: filteringUsersService(value, state.copyUsers) })
    }
    //-------fin  de  filtrado---------//

    // ---ordenar por orden ------------

    function sortColum(column) {
        setState({ ...state, users: getSort(state.users, column) })
        //setOrder({...order,  users: getSort() })

    }

    //-------Fin  del orden -----//

    const classes = styles();
    return (
        <div className="stiloTable  animate__animated animate__fadeInRight">
            <TableContainer className="tablehead" >
                <Table className= {classes.tablaMaterial}>
                    <TableHead >
                        <TableRow>
                            <TableCell className="cursor "> <div className="flex">ID</div> </TableCell>
                            <TableCell className="cursor" onClick={() => sortColum('email')} ><div className="flex"> Email </div> </TableCell>
                            <TableCell className="cursor" onClick={() => sortColum('first_name')} ><div className="flex"> Nombre </div></TableCell>
                            <TableCell className="cursor" onClick={() => sortColum('last_name')}><div className="flex"> Apellido </div></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody >
                        {state && state.users?.map(user => (
                            <TableRow className="cursor" key={user.id}  onClick={() => history.push('/DataUser/' + user.id)}>
                                <TableCell ><div className="flex">{user.id}</div></TableCell>
                                <TableCell ><div className="flex">{user.email}</div></TableCell>
                                <TableCell ><div className="flex">{user.first_name}</div></TableCell>
                                <TableCell ><div className="flex">{user.last_name}</div></TableCell>                  
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="footer"> 
                <TableCell >
                                <FormControl >
                                    <InputLabel htmlFor="my-input">Buscando...</InputLabel>
                                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(ev) => filteringUsers(ev.target.value)} />
                                    <FormHelperText id="my-helper-text"> Buscar tu candidato</FormHelperText>
                                </FormControl>
                            </TableCell>                 
                        
                            <TableCell >
                                <FormControl >
                                    <InputLabel className="label-sort">Ordenar por:</InputLabel>
                                    <Select value={'id'} placeholder='Id'>
                                        <MenuItem value="id" onClick={() => sortColum('id')}>Id</MenuItem>
                                        <MenuItem value="nombre" onClick={() => sortColum('first_name')}> Nombre </MenuItem>
                                        <MenuItem value="apellido" onClick={() => sortColum('last_name')}> Apellido </MenuItem>
                                        <MenuItem value="email" onClick={() => sortColum('email')}> Email </MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
               </div>
            </TableContainer>
        </div>
    )
}