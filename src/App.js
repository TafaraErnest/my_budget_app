import "./App.css";
import AddNewItem from "./components/AddNewItem";
import AllItems from "./components/AllItems";
import CardsSection from "./components/CardsSection";
import Header from "./components/Header";
import { nanoid } from "nanoid";
import { useState } from "react";
import AddExpense from "./components/AddExpense";

function App() {
  const [data, setData] = useState([
    {
      id: nanoid(),
      category: "Transport",
      total: 1200,
      max: 3200,
      trans: [
        {
          id: nanoid(),
          exName: "Bus",
          date: new Date().toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
          }),
          value: 12,
        },
        {
          id: nanoid(),
          exName: "Subway",
          date: new Date().toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
          }),
          value: 15,
        },
      ],
    },
    {
      id: nanoid(),
      category: "Shopping",
      total: 1000,
      max: 3000,
      trans: [
        {
          id: nanoid(),
          exName: "Clothes",
          date: new Date().toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
          }),
          value: 12,
        },
        {
          id: nanoid(),
          exName: "Food",
          date: new Date().toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
          }),
          value: 15,
        },
      ],
    },
  ]);

  const [expenseData, setExpenseData] = useState([]);
  const [hide, setHide] = useState("hidden");
  const [hideEx, setHideEx] = useState("hidden");
  const [maxVal, setMaxVal] = useState("");
  const [message, setMessage] = useState("");
  const [hideExpense, setHideExpense] = useState("hidden");
  const [exId, SeExId] = useState("");

  // useEffect(() => {
  //   let savedData = localStorage.getItem("budget-data");
  //   savedData = JSON.parse(savedData);
  //   if (savedData.length > 0) {
  //     setData(savedData);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("budget-data", JSON.stringify(data));
  // }, [data]);
  const updateCat = (e) => {
    setMessage(e.target.value);
  };
  const updateMax = (e) => {
    setMaxVal(e.target.value);
  };
  const openAddForm = () => {
    setHide("");
  };
  const showAll = (id) => {
    data.map(function (item) {
      if (item.id === id) {
        setExpenseData(item.trans);
        SeExId(id);
        return item;
      } else return item;
    });
    setHideEx("");
  };
  const closeAll = (id) => {
    setHideEx("hidden");
    data.forEach((item) => {
      if (item.id === id) {
        item.trans = expenseData;
      }
    });
  };
  const closeForm = () => {
    setHide("hidden");
    setMaxVal("");
    setMessage("");
  };
  const addNewSection = (cat, max) => {
    if (cat !== "") {
      if (max) {
        setData([
          ...data,
          {
            id: nanoid(),
            category: cat,
            total: 0,
            max: max,
            trans: [],
          },
        ]);
      }
    }

    setHide("hidden");
    setMaxVal("");
    setMessage("");
  };
  const deleteSection = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const closeExpense = () => {
    setHideExpense("hidden");
  };
  const showAddExpense = () => {
    setHideExpense("");
  };
  const addNewExpense = (id, name, amount) => {
    if (name && amount) {
      data.map((item) => {
        if (item.id === id) {
          return setExpenseData([
            ...expenseData,
            {
              id: nanoid(),
              exName: name,
              date: new Date().toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
              }),
              value: amount,
            },
          ]);
        } else return item;
      });
    }

    setMessage("");
    setMaxVal("");
    setHideExpense("hidden");
  };
  const deleteExpense = (id) => {
    setExpenseData(expenseData.filter((item) => item.id !== id));
  };

  return (
    <main>
      <Header />
      <CardsSection
        data={data}
        openAddForm={openAddForm}
        deleteSection={deleteSection}
        showAll={showAll}
      />
      <AddNewItem
        hide={hide}
        addNewSection={addNewSection}
        updateCat={updateCat}
        updateMax={updateMax}
        message={message}
        maxVal={maxVal}
        closeForm={closeForm}
      />
      <AllItems
        hideEx={hideEx}
        closeAll={closeAll}
        showAddExpense={showAddExpense}
        expenseData={expenseData}
        deleteExpense={deleteExpense}
        exId={exId}
      />
      <AddExpense
        updateCat={updateCat}
        message={message}
        updateMax={updateMax}
        maxVal={maxVal}
        exId={exId}
        addNewExpense={addNewExpense}
        closeExpense={closeExpense}
        hideExpense={hideExpense}
      />
    </main>
  );
}

export default App;
