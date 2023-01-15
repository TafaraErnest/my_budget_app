import React from "react";

export default function Card({ data, deleteSection, showAll }) {
  let sum = 0;
  const total = [...data.trans];
  total.forEach((item) => {
    sum += +item.value;
  });

  return (
    <div className="card">
      <div className="card_top">
        <h3 className="cat_name">{data.category}</h3>
      </div>
      <div className="card_mid">
        <progress value={sum} max={data.max}></progress>
        <div className="prog_info">
          <small>
            {sum} / {data.max}
          </small>
          <h3 className="percentage">{Math.round((sum / data.max) * 100)}%</h3>
        </div>
      </div>
      <div className="card_btns">
        <button className="btn add_btn">Add expense</button>
        <button className="btn" onClick={() => showAll(data.id)}>
          Show all
        </button>
        <button className="btn del" onClick={() => deleteSection(data.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
