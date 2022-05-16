import React, { useState, useRef, useEffect } from "react";
import Overlay from "react-overlay-component";
import { PlayAudio } from "../PlayAudio/PlayAudio";
import { updateNameById } from "../../apis/name-apis/name-services"; 
import resources from "../../resources/resources.json";

export const EditOverlay = (props) => {
  const [isOpen, setOverlay] = useState(false);
  const [payload, setPayload] = useState({});
  const [isSave, setIsSave] = useState(false); 
  const preferredNameRef = useRef(""); 
  const presetRef = useRef("");
  const speedRef = useRef("");

  const { row } = props;

  const closeOverlay = () => {
    setOverlay(false);  
  };

  const handleCancelButton = () => {
    setOverlay(false);  
  };
  const handleSaveButton = () => {
    setPayload(
      {
        firstName: row.firstName, 
        lastName: row.lastName, 
        preferredName: preferredNameRef.current.value, 
        preferredPreset: presetRef.current.value, 
        preferredSpeed: +speedRef.current.value, 
        active: row.active
      }
    )
    setIsSave(true);
  };

  useEffect(() => {
    if(isSave){
      console.log("payload: ", payload);
      updateNameById(payload); 
    }
  },[isSave, payload]); 

  return (
    <div>
      <button
        className="btn btn-outline-warning"
        onClick={() => {
          setOverlay(true);
        }}
      >
        Edit
      </button>
      <Overlay
        configs={{ animate: true }}
        isOpen={isOpen}
        closeOverlay={closeOverlay}
      >
        <h1>Edit <u>{row.firstName}</u> preferences</h1>
        <div className="container edit-modal mt-4">
          <div className="input-group mb-4">
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                Preferred name:
              </span>
            </div>
            <input
              ref={preferredNameRef}
              name="name"
              type="text"
              className="form-control"
              placeholder={`${row.preferredName}`} 
            />
          </div>
          <div className="input-group mb-4">
            <div className="input-group-append">
              <label 
                className="input-group-text" 
                htmlFor="select-country">
                Select Preset:
              </label>
            </div>
            <select 
              ref={presetRef} 
              className="form-control" 
              name="select-country" 
              id="select-country" 
              >
              <option>Select Dropdown...</option>
              {resources &&
                resources["preferredPreset"].map((entry, key) => (
                  <option key={key} value={entry.value}>
                    {entry.key}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-group mb-4">
            <div className="input-group-append">
              <label 
                className="input-group-text" 
                htmlFor="select-speed">
                Select Speed:
              </label>
            </div>
            <select 
              ref={speedRef} 
              className="form-control" 
              name="select-speed"
              id="select-speed"
              >
              <option>Select Dropdown...</option>
              {resources &&
                resources["preferredSpeed"].map((entry, key) => (
                  <option key={key} value={entry.value}>
                    {entry.key}
                  </option>
                ))}
            </select>
          </div>
          <div className="mt-4">
            <button 
              className="btn btn-primary" 
              type="text"
              onClick={handleSaveButton}
              >
              Save
            </button>
            <PlayAudio
              type="success"
              label="Test"
              name={row.firstName}
            />
            <button 
              className="btn btn-outline-secondary" 
              type="text"
              onClick={handleCancelButton}
              >
              Cancel
            </button>
          </div>
        </div>
      </Overlay>
    </div>
  );
};
