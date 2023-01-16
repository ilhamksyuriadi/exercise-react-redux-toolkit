import React, { useEffect } from 'react'
import CardUser from '../components/CardUser'
import './ListUser.css'
import { useSelector } from 'react-redux'
import { selectUsersState } from '../redux/userSlice'

const ListUser = () => {
    const users = useSelector(selectUsersState())

    useEffect(() => {
        console.log('user from store',users)
    },[])

    return (
        <div className='list-user'>
            <CardUser name={"test"} />
        </div>
    )
}

export default ListUser