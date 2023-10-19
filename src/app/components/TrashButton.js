import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TrashButton = (props) => {
  const callMaster = () => {
    props.do();
  }
  return (
    <button className="btn btn-md btn-danger ms-2" onClick={callMaster}>
        <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default TrashButton;
