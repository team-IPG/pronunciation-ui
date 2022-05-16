import React, { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import { Table } from "../../components/Table/Table";
import {
  fetchNamesByNames,
  fetchNameById
} from "../../apis/name-apis/name-services";

const GetStarted = () => {
  const [fullname, setFullname] = useState("");
  const [names, setNames] = useState([]);

  useEffect(() => {
        if(fullname !== "" && fullname.includes(" ")){
          let firstName = fullname.split(" ")[0]; 
          let lastName = fullname.split(" ")[1];
          fetchNameById(setNames, {firstName, lastName})
        }else if(fullname !== "" && !fullname.includes(" ")){
          fetchNamesByNames(setNames, fullname)
        }else{
          setNames((prev) => []);
        }
  }, [fullname]);

  const handleInfo = (data) => {
    setFullname(data);
  };

  return (
    <div className="get-started">
      <div className="title">
        <h1>Start Searching Words</h1>
      </div>
      <Search handleInfo={handleInfo} />
      <Table rows={names} />
    </div>
  );
};
export default GetStarted;
