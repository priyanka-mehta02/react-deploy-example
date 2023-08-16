import React, {useState , useContext} from 'react'
import Notifications from './Notifications';
import NotificationsContext from '../context/NotificationsContext';

function Login() {
    const { addNotification} = useContext(NotificationsContext);
    console.log(addNotification);
    const [user , setUser ] = useState({ email:'' ,password:''})
    const onSubmit = (e)=>{
        e.preventDefault();
        if(user.email ==='' || user.password === ''){
            addNotification('Please fill in all the fields !' ,'danger')
        }
       else if(user.password.length < 6 ){
            addNotification('password should be at least 6 characters !' ,'warning')
        }
        else{
            addNotification('please wait we are sending your data !' ,'success')
        }


    }
    const onChange = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
    }
    return (
  <div className="container-fluid">
     
    <div className="mb-5 mt-3">
        <h1 > Login Form </h1>
    </div>  
    <Notifications />     
    <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={onChange} value={user.email} type="email" className="form-control" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={onChange} value={user.password} type="password" className="form-control" name ="password" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>  
    )
}

export default Login
