import React, { useState, useRef, useEffect } from "react";
import Overlay from "react-overlay-component";
import resources from "../../resources/resources.json";
import { PlayAudio } from "../PlayAudio/PlayAudio";
import { updateNameById } from "../../apis/name-apis/name-services"; 

export const EditOverlay = (props) => {
  const [isOpen, setOverlay] = useState(false);
  const [payload, setPayload] = useState({});
  const [isSave, setIsSave] = useState(false); 
  const preferredNameRef = useRef(""); 
  const countryRef = useRef("");
  const genderRef = useRef("");
  const speedRef = useRef("");

  const { row } = props;

  const closeOverlay = () => {
    setOverlay(false);  
  };

  const handleModalOnChange = (e) => {
    console.log(e.target.name);
  }

  const handleCancelButton = () => {
    setOverlay(false);  
  };
  const handleSaveButton = () => {
    setPayload(
      {
        firstName: row.firstName, 
        lastName: row.lastName, 
        preferredName: preferredNameRef.current.value, 
        preferredPreset: countryRef.current.value, 
        preferredSpeed: +speedRef.current.value, 
        active: row.active
      }
    )
    setIsSave(true);
  };

  useEffect(() => {
    if(isSave){
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
                Preferred Pronunciation:
              </span>
            </div>
            <input
              ref={preferredNameRef}
              name="name"
              type="text"
              className="form-control"
              placeholder={`${row.preferredName}`} 
              onChange={handleModalOnChange}
            />
          </div>
          <div className="input-group mb-4">
            <div className="input-group-append">
              <label 
                className="input-group-text" 
                htmlFor="select-country">
                Select Country:
              </label>
            </div>
            <select 
              ref={countryRef} 
              className="form-control" 
              name="select-country" 
              id="select-country" 
              onChange={handleModalOnChange}>
              <option>Select Dropdown...</option>
              {resources.countries &&
                resources["countries"].map((entry, key) => (
                  <option key={key} value={entry.code}>
                    {entry.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="input-group mb-4">
            <div className="input-group-append">
              <label 
                className="input-group-text" 
                htmlFor="select-gender">
                Select Gender:
              </label>
            </div>
            <select 
              ref={genderRef} 
              className="form-control" 
              name="select-gender"
              id="select-gender">
              <option>Select Dropdown...</option>
              {resources.countries &&
                resources["gender"].map((entry, key) => (
                  <option key={key} value={entry}>
                    {entry}
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
              id="select-speed">
              <option>Select Dropdown...</option>
              {resources.countries &&
                resources["speed"].map((entry, key) => (
                  <option key={key} value={entry}>
                    {entry}
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
