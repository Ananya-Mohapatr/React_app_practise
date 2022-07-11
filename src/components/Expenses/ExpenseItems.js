import React,{ useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    const [title,setTitle]=useState(props.title)
    const clickHandler =() => {
        setTitle("Updated!!")
        console.log(title);//You see old values here,rather thn Updated!!
                           //because setTitle doesnt changes value rightaway,but schedules its change
    }
    return (
        <Card className='expense-item '>
            <ExpenseDate
                date={props.date}
            />
            {/* {props.date.toISOString()}------->this line can be used to convert date to string format */}
            <div className='expense-item__description '>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button className="expense-change__button"onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;