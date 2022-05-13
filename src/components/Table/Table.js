import React, { useEffect } from "react";

export const Table = (props) => {
  const { rows } = props;
  let name = rows[0];
  let details = rows[1];

  return (
    <div className="mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Opt out</th>
            <th scope="col">Username</th>
            <th scope="col">User ID</th>
            <th scope="col">Edit</th>
            <th scope="col">play</th>
          </tr>
        </thead>
        <tbody>
          {rows.length == 2 ? (
            Object.values(details).map((entry, key) => (
              <tr key={key}>
                <th scope="row">
                  <button className="btn btn-danger">Deactivate</button>
                </th>
                <td>{name}</td>
                <td>{entry.name_id}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td>
                  <button className="btn btn-info">Play it!</button>
                </td>
              </tr>
            ))
          ) : (
            <div>
              <h6>No Results found!</h6>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};
