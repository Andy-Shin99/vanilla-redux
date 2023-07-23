import {useState} from "react";

export default function Home() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <ul></ul>
    </>
  );
}
