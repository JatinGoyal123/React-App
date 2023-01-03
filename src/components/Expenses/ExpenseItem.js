import './ExpenseItem.css';
import './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  const clickHandler = () => {
    // it wont get updated like this for this we need the concept of states in react.
    // title = 'updated';
    setTitle('updated');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={()=>{console.log("Clicked")}}>Change title</button> */}
      {/* we do not put brackets after click handler we just point to that handler becaause if we put brackets then it would get executed first */}
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
