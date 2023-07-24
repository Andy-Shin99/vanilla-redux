import {useState} from "react";
import {connect} from "react-redux";
import {add} from "./store";
import Todo from "../components/Todo";

function mapStateToProps(state) {
  return {toDos: state};
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(add(text)),
  };
}

function Home({toDos, addTodo}) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInputChange} />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
