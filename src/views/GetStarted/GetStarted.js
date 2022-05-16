import React, { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import { Table } from "../../components/Table/Table";
import {
  fetchNamesByNames,
  fetchNameById
} from "../../apis/name-apis/name-services";

const GetStarted = () => {
  const [fullname, setFullname] = useState({});
  const [names, setNames] = useState([]);

  const { firstname="", lastname=""} = fullname;

  useEffect(() => {
        if (firstname !== "" && lastname !== "") {
          fetchNameById(setNames, fullname);
        } else if(firstname !== "" || lastname !== "") {
          fetchNamesByNames(setNames, fullname); 
        }else{
          setNames((prev) => []);
          return;
        }
  }, [firstname, lastname, fullname]);

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
