import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, login } from "../features/auth/authSlice";
import { getProfile } from "../features/auth/profileSlice";
import { getDishes } from "../features/cart/cartSlice";


export default function Login(){
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const authState = useSelector(state=>state.auth);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        if(authState.isSuccess){
            toast("login success")
            dispatch(reset())
            navigate('/')
        }
    },[authState.isSuccess])

    const changeBirthDate = (date) =>{
        //console.log(date)
        const re = /\d{4}-\d{2}-\d{2}/;
        const arr = date.match(re)
        console.log(arr[0], typeof arr[0])
        return arr[0]
    }



    const handleChange = (event) =>{
        setUser((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value            
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(login(user))
        .then(()=>{// get profile
            if(localStorage.getItem('user')){
                dispatch(getProfile(localStorage.getItem('user')))
                .then(response => response.payload)
                .then(payload => {
                    return {
                        fullName: payload.fullName,
                        birthDate: changeBirthDate(payload.birthDate),
                        email: payload.email,
                        gender: payload.gender,
                        address:payload.address,
                        phoneNumber:payload.phoneNumber
                    }
                })
                .then(obj => localStorage.setItem('userProfile',JSON.stringify(obj)))
            }
        })
        .then(()=>{// get cart
            if(localStorage.getItem('user')){
                dispatch(getDishes(localStorage.getItem('user')))
                .then(response => response.payload)
                .then(obj => localStorage.setItem('cartItems', JSON.stringify(obj)))
            }
        })
    }

    return(
        <div className="container w-25">
        <form onSubmit={handleSubmit}>
            <h1 className="my-5">Authorization</h1>
            <div class="form-group">
                <label for="emailLogin">Email</label>
                <input value={user.email} onChange={handleChange} name="email" type="email" class="form-control" id="emailLogin" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div class="form-group">
                <label for="passwordLogin">Password</label>
                <input value={user.password} onChange={handleChange} name="password" type="password" class="form-control" id="passwordLogin" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary my-3">Login</button>
        </form>
        </div>
    );
}