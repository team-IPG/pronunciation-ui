import React, { useState, useEffect } from "react";
import { EditOverlay } from "../Overlay/EditOverlay";
import { PlayAudio } from "../PlayAudio/PlayAudio";
import { updateNameById } from "../../apis/name-apis/name-services"

export const Table = (props) => {
  const [currentRow, setCurrentRow] = useState([]);
  const { rows } = props;

  const handleDeactivate = (entry) => {
    setCurrentRow(entry);
  };

  useEffect(() => {
    // updateNameById({active: !currentRow.active, ...currentRow})
  },[currentRow])

  return (
    <div className="mt-5">
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Deactivate</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Pronunciation</th>
            <th scope="col">Edit</th>
            <th scope="col">Play</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 &&
            Object.values(rows).map((entry, key) => (
              <tr key={key}>
                <th scope="row">
                  <button
                    onClick={() => handleDeactivate(entry)}
                    className="btn btn-outline-danger"
                  >
                   { entry.active ? "Deactivate" : "Activate"}
                  </button>
                </th>
                <td>{entry.firstName}</td>
                <td>{entry.lastName}</td>
                <td>{entry.preferredName}</td>
                <td>
                  <EditOverlay row={entry} />
                </td>
                <td>
                  <PlayAudio type="outline-info" name={entry.firstName} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {rows.length === 0 && (
        <div>
          <h6>No Results Found!</h6>
        </div>
      )}
    </div>
  );
};
