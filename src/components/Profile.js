
import { useState, useEffect } from 'react';
import axios from 'axios'


const Profile = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        axios({
            method: "get",
            url: "https://prueba-deploy-back.herokuapp.com/sv/auth/logged-user",
            withCredentials: true,
            headers:{"Access-Control-Allow-Origin": "*"}
            
        })
            .then((response) => {
                console.log(response.data);
                setUser(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <h1>my name is {user?.username}</h1>
    );
};


export default Profile