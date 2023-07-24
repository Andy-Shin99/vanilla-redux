import {connect} from "react-redux";
import {remove} from "../routes/store";
import {Link} from "react-router-dom";

function Todo({text, id, onBtnClick}) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
