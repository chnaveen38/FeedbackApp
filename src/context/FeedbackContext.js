import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'


const FeebackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback]=useState([
        {
            id: 1,
            text: 'this is feedback item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'this is feedback item 2',
            rating: 8
        }
    ])
    
    const [editFeedbackItem, setEditFeedbackItem] = useState({
        item: {},
        edit:false
    })
    //delete feedback item
    const deleteFeedback =(id) => {
        if(window.confirm("Are you sure you want to delete")){
            setFeedback(feedback.filter((item) => item.id !== id))
        }       
    }
    //add feedback item
    const addFeedback =(newFeedback) => {
        newFeedback.id =uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    //edit feedback item
    const editFeedback =(item) => {
        setEditFeedbackItem({
            item,edit:true
        })
    }
    //update feedback item
    const updateFeedback =(id,updItem) => {
        setFeedback(feedback.map((item) =>(item.id ===id ? 
            {
                ...item, ...updItem
            }:item))
        )
    }   


    return <FeebackContext.Provider 
    value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        editFeedbackItem,
        updateFeedback,
    }}>
        {children}
    </FeebackContext.Provider>
}

export default FeebackContext