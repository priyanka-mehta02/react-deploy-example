import React , {useReducer , useState} from 'react';

import NotificationsContext from './NotificationsContext';

function NotificationsState(props) {
   
    const [state , setState] = useState([]) 
    
    const addNotification = (msg , type )=>{
        const id = Date.now();
        setState([...state , { msg , id ,type} ])
       
    }
    const removeNotification = (id)=>{      
       
          setState(state.filter((item, index)=> item.id !== id ))
       
      

    }
    return (
        <NotificationsContext.Provider value = {{state , addNotification , removeNotification }}>
            { props.children}
        </NotificationsContext.Provider>
    )
}

export default NotificationsState
