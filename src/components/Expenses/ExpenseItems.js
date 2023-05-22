import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItems = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('New Title!');
  }
  return (
    <Card className="expense-item">
          <ExpenseDate date={props.date } />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Update Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItems;
