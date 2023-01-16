import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice' // ini action
import ListUser from '../sections/ListUser'
import './PageUser.css'

const PageUser = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') 
            .then(res => {
                console.log(res)
                dispatch(setUser(res.data))
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <div className='page-user'>
            <ListUser />
        </div>
    )
}

export default PageUser