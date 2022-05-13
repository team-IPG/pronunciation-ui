import React, { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import { Table } from "../../components/Table/Table";
import { fetchAllNames } from "../../apis/name-apis/name-services";

const GetStarted = () => {
  const [username, setUsername] = useState(null);
  const [userId, setUserId] = useState(null);
  const [names, setNames] = useState({});
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchAllNames(setNames); 
  },[]);

  useEffect(() => {
    let _rows = "";
    _rows = Object.entries(names).find(entry => entry[0] === username);
    _rows ? setRows(_rows) : setRows([]);
  },[username, userId]); 
  

  const handleInfo = (_info) => {
    setUsername(_info.username); 
    setUserId(_info.userId); 
  }; 

  return (
    <div className="get-started">
      <div className="title">
        <h1>Start Searching Words</h1>
      </div>
      <Search handleInfo={handleInfo}/>
      <Table rows={rows} />
    </div>
  );
};
export default GetStarted;
