import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enterTitle: "",
  //     enterAmount: "",
  //     enterDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
    /*best Practice */
    //   setUserInput((prevState) => {
    //       return { ...prevState, enterTitle: event.target.value };
    //   });
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //   ...setUserInput,
    //   enterDate: event.target.value,
    // });
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      titile: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    console.log(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min="2019-04-01"
            max="2023-04-02"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
