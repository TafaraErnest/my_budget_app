import Expense from "./Expense";

export default function AllItems({
  hideEx,
  closeAll,
  showAddExpense,
  expenseData,
  deleteExpense,
  exId,
}) {
  return (
    <div className="add_page flx" id={hideEx}>
      <div className="expenses">
        <h3 className="add_card_title flx">All Food Expenses</h3>
        <div className="expenses_sec">
          {expenseData.map((expense) => {
            return (
              <Expense
                key={expense.id}
                name={expense.exName}
                amount={expense.value}
                id={expense.id}
                deleteExpense={deleteExpense}
                date={expense.date}
              />
            );
          })}
        </div>
        <div className="empty_expense flx">
          <h3 className="add_expense" onClick={showAddExpense}>
            Click to add expense...
          </h3>
        </div>
        <div className="flx">
          <button className="btn del" onClick={() => closeAll(exId)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
