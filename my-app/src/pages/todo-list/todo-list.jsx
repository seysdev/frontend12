import { useState } from "react";
import "./todo-list.scss";

function Form(props) {
  const { onItem = () => {} } = props;
  const [task, setTask] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onItem({
          text: task,
        });
        setTask("");
      }}
      className="flex"
    >
      <input
        type="text"
        className="p-4 border border-gray-400 rounded mr-2"
        required
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button className="bg-emerald-500 px-12 py-4 font-bold rounded">
        Agregar
      </button>
    </form>
  );
}

function List(props) {
  const { items = [], onDelete = () => {} } = props;

  return (
    <ul className="py-6">
      {items.map((item, key) => (
        <li
          className="bg-black py-4 px-10 rounded text-white mb-4 flex items-center justify-between text-3xl font-bold"
          key={key}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.checked
                  ? e.target.closest("li").classList.add("is-check")
                  : e.target.closest("li").classList.remove("is-check");
              }}
              className="mr-2"
            />
            <span>{item.text}</span>
          </div>
          <button
            className="self-end text-red-700 font-bold rounded-full bg-lime-600 w-10 h-10 text-xl"
            onClick={() =>
              window.confirm(
                `Estas seguro que quieres eliminar la tarea ${item.text}`
              ) && onDelete(item)
            }
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export function PageTodoList() { 
  const [items, setItems] = useState([]);

  return (
    <div className="page-todo-list">
      <Form
        onItem={(item) => {
          console.log("item", item);
          setItems((state) => [...state, item]);
        }}
      />
      <List
        items={items}
        onDelete={(item) => {
          setItems(
            items.filter((elementItem) => elementItem.text !== item.text)
          );
        }}
      />
    </div>
  );
}
