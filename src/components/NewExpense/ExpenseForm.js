import React,{useState} from 'react';
import './ExpenseForm.css'
const ExpenseForm=()=>{
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState("")
    const [enteredDate,setEnteredDate]=useState(new Date())
    const titleChangeHandler=(event)=>{
    console.log("Title Changed!!",event);//inside event,there is target and inside it
    //there is value written in (...),click on this (...) and you will get the value you changed.
    setEnteredTitle(event.target.value)
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler=event=>{
        setEnteredDate(event.target.value)
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
                
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' max="new Date()" onChange={dateChangeHandler}/>
                
            </div>
            <div className="new-expense__actions">
                <button type="sumit">Add Expense</button>
                <input type='date' max="new Date()" onChange={dateChangeHandler}/>
                
            </div>
        </div>
    </form>

};
export default ExpenseForm;