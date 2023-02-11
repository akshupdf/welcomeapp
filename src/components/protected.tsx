import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




function Protected(props: any){

    const {Component} = props 

    const navigate = useNavigate()

    useEffect(()=>{
        const register = localStorage.getItem('register');
        if (!register) {
            navigate('/')
        }
    })

    return (
        <div>
            
            <Component />
        </div>
    )
}

export default Protected;