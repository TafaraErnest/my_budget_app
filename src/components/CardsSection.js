import Card from "./Card";

export default function CardsSection({
  data,
  openAddForm,
  deleteSection,
  showAll,
  showAddExpense,
}) {
  return (
    <>
      <div className="flx">
        <button className="btn add_card_btn" onClick={openAddForm}>
          Add new Section
        </button>
      </div>
      <div className="cards_sec">
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              data={card}
              deleteSection={deleteSection}
              showAll={showAll}
            />
          );
        })}
      </div>
      <div className="empty_expense flx add_sec_tab" onClick={openAddForm}>
        <h3 className="add_expense" onClick={showAddExpense}>
          Click to add new section
        </h3>
      </div>
    </>
  );
}
