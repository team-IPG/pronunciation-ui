import React, { useRef } from "react";

export const Search = (props) => {
  let fullnameRef = useRef("");

  const { handleInfo } = props;

  const handleSearchedName = (e) => {
    e.preventDefault();
    handleInfo(fullnameRef.current.value);
  };

  return (
    <form className="input-group mt-5" onSubmit={handleSearchedName}>
        <div className="form-outline w-75">
          <input
            ref={fullnameRef}
            id="search-firstname"
            name="firstname"
            type="search"
            className="form-control"
            placeholder="Enter Firstname, Lastname, or ID"
          />
        </div>
        <div className="form-outline w-20 ms-4">
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-search">Search</i>
          </button>
        </div>
    </form>
  );
};
