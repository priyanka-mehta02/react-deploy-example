import React , {useContext} from 'react'
import NotificationsContext from '../context/NotificationsContext';
import Notifications from './Notifications';
function Contact() {
    const { addNotification} = useContext(NotificationsContext)

    return (
        <div>
             <Notifications />
            <h1> this is contact us page </h1>
            <button onClick = {()=>{ addNotification('this is success message ', 'success') }}> add success </button>
            <button onClick = {()=>{ addNotification('this is error message ', 'danger') }}> add error </button>
            <button onClick = {()=>{ addNotification('this is warning message ', 'warning') }}> add warning </button>
            <button onClick = {()=>{ addNotification('this is info message ', 'info') }}> add info </button>
           
        </div>
    )
}

export default Contact
