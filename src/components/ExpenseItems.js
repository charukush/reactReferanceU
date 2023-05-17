import './ExpenseItem.css';

function ExpenseItems() {
    const expenseDate = new Date(2023, 5, 17);
    const expenseTitle = 'Car Insurance';
    const expensePrice = 340.09;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
              <h2 className='expense-item h2'>{expenseTitle }</h2>
        <div className='expense-item__price'>${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
