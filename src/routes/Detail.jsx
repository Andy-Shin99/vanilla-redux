import {connect} from "react-redux";
import {useParams} from "react-router-dom";

function Detail({toDos}) {
  const {id} = useParams();

  const toDo = toDos.find((todo) => todo.id === parseInt(id));

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created At: {toDo.id}</h5>
    </>
  );
}

function mapStateToProps(state) {
  return {toDos: state};
}

export default connect(mapStateToProps)(Detail);
