export default function Expense({ name, amount, deleteExpense, date, id }) {
  // const date = new Date();
  return (
    <div className="expense">
      <h3 className="expense_name">{name}</h3>
      <small className="expense_date">{date}</small>
      <h3 className="expense_amount">{amount}</h3>
      <button className="btn del" onClick={() => deleteExpense(id)}>
        delete
      </button>
    </div>
  );
}
