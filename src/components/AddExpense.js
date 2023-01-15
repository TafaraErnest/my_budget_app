export default function AddExpense({
  updateCat,
  message,
  updateMax,
  maxVal,
  addNewExpense,
  hideExpense,
  closeExpense,
  exId,
}) {
  return (
    <div className="add_page flx" id={hideExpense}>
      <div className="add_card flx-col">
        <h3 className="add_card_title">Add new expense</h3>
        <input
          type="text"
          placeholder="ENTER EXPENSE NAME"
          onChange={updateCat}
          value={message}
          required
        />
        <input
          type="number"
          placeholder="ENTER EXPENSE AMOUNT"
          onChange={updateMax}
          value={maxVal}
          required
        />
        <div className="flx">
          <button
            className="btn"
            onClick={() => addNewExpense(exId, message, maxVal)}
          >
            OK
          </button>
          <button className="btn del" onClick={closeExpense}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
