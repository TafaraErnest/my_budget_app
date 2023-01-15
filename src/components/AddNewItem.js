export default function AddNewItem({
  hide,
  addNewSection,
  updateCat,
  updateMax,
  message,
  maxVal,
  closeForm,
}) {
  return (
    <div className="add_page flx" id={hide}>
      <div className="add_card flx-col">
        <h3 className="add_card_title">Add new budget</h3>
        <input
          type="text"
          placeholder="ENTER SECTION NAME"
          onChange={updateCat}
          value={message}
          required
        />
        <input
          type="number"
          placeholder="ENTER MAX AMOUNT"
          onChange={updateMax}
          value={maxVal}
          required
        />
        <div className="flx">
          <button
            className="btn"
            onClick={() => addNewSection(message, maxVal)}
          >
            OK
          </button>
          <button className="btn del" onClick={closeForm}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
