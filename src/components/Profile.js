import AuthService from '../services/auth.service';
import { useState, useEffect } from 'react';
import axios from 'axios'


const Profile = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        axios({
            method: "get",
            url: "https://prueba-deploy-back.herokuapp.com/sv/auth/logged-user",
            withCredentials: true
        })
            .then(response => setUser(response.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <h1>my name is {user?.username}</h1>
    );
};


export default Profile