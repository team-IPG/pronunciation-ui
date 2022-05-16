import React, { useRef } from "react";

export const Search = (props) => {
  let firstnameRef = useRef();
  let lastnameRef = useRef();

  const { handleInfo } = props;

  const handleSearchedName = (e) => {
    e.preventDefault();
    let obj = {
      firstname: firstnameRef.current.value, 
      lastname: lastnameRef.current.value 
    }
    handleInfo(obj);
  };

  const handleOnChange = () => {
    let obj = {
      firstname: firstnameRef.current.value, 
      lastname: lastnameRef.current.value 
    }
    handleInfo(obj);
  };

  return (
    <form className="input-group mt-5" onSubmit={handleSearchedName}>
      <div className="row">
        <div className="form-outline col">
          <input
            ref={firstnameRef}
            id="search-firstname"
            name="firstname"
            type="search"
            className="form-control"
            placeholder="Enter first name"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-outline col">
          <input
            ref={lastnameRef}
            id="search-lastname"
            name="lastname"
            type="search"
            className="form-control"
            placeholder="Enter last name"
            onChange={handleOnChange}
          />
        </div>
        <div className="col-auto w-20 ms-2">
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-search">Search</i>
          </button>
        </div>
      </div>
    </form>
  );
};
