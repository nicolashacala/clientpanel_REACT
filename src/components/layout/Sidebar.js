import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <Link to="/client/add" className="btn btn-success btn-block btn-sm mt-2">
      <i className="fas fa-plus"> New</i>
    </Link>
  );
};
