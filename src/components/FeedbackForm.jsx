import React from 'react'
import Card from './shared/Card'
import { useState, useContext, useEffect} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

  const {addFeedback, editFeedbackItem, updateFeedback}= useContext(FeedbackContext)

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating]= useState(10)

  useEffect(() => {
    if(editFeedbackItem.edit ===true){
      setBtnDisabled(false)
      setText(editFeedbackItem.item.text)
      setRating(editFeedbackItem.item.rating)
      setMessage(editFeedbackItem.item.message)
    }

  },[editFeedbackItem])

  const handleTextChnage = (e) => {
    if(text==='')
    {
      setBtnDisabled(true)
      setMessage(null)
    }
    else if(text!=='' && text.trim().length<=10){
      setBtnDisabled(true)
      setMessage('Test must not be less than 10 characters')
    }
    else if(text!=='' && text.trim().length>=10){
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    if(text.trim().length>10){
      const newFeedback ={
        text,
        rating
      }

      if(editFeedbackItem.edit ===true){
        updateFeedback(editFeedbackItem.item.id,newFeedback)
      }
      else
      addFeedback(newFeedback)

      setText('')
    }
  }
  return (
    <Card>
        <form onSubmit={handleSubmit}> 
            <h2>Please rate us from 1 to 10 based on service</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChnage} type="text" 
                placeholder='Write a review' value={text}/>
                <Button type="submit" version='primary' isDisabled={btnDisabled}>
                  Send
                </Button>

            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm