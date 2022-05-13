import React, { useRef } from "react";

export const Search = (props) => {
  const { handleInfo } = props;
  const usernameRef = useRef();

  const handleSearchedName = (e) => {
    e.preventDefault();
    let _usernameRef = usernameRef.current.value;
    handleInfo({username:_usernameRef});
    usernameRef.current.value = "";
  };

  return (
    <form className="input-group mt-5" onSubmit={handleSearchedName}>
      <div className="form-outline w-75">
        <input
          ref={usernameRef}
          id="search-username"
          type="search"
          className="form-control"
          placeholder="Username"
        />
      </div>
      <div className="col-auto w-20 ms-2">
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-search">Search</i>
        </button>
      </div>
    </form>
  );
};
