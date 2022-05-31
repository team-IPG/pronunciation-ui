import React, { useState, useRef, useEffect } from "react";
import Overlay from "react-overlay-component";
import { PlayAudio } from "../PlayAudio/PlayAudio";
import { updateNameById } from "../../apis/name-apis/name-services";
import resources from "../../resources/resources.json";

export const EditOverlay = (props) => {
  const [isOpen, setOverlay] = useState(false);
  const [isTest, setIsTest] = useState(false);
  const [payload, setPayload] = useState({});
  const [isSave, setIsSave] = useState(false);
  const preferredNameRef = useRef("");
  const presetRef = useRef("");
  const speedRef = useRef("");

  const { row } = props;

  const onTest = () => {
    setPayload((prev) => ({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
      preferredName: preferredNameRef.current.value ? preferredNameRef.current.value : row.preferredName,
      preferredPreset: presetRef.current.value ? presetRef.current.value : row.preferredPreset,
      preferredSpeed: speedRef.current.value ?  speedRef.current.value : row.preferredSpeed,
      active: row.active,
    }));
    setIsTest((prev) => true);
  }
  const closeOverlay = () => {
    setOverlay(false);
  };

  const handleCancelButton = () => {
    setOverlay(false);
  };

  const handleSaveButton = () => {
    setPayload((prev) => ({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
      preferredName: preferredNameRef.current.value ? preferredNameRef.current.value : row.preferredName,
      preferredPreset: presetRef.current.value ? presetRef.current.value : row.preferredPreset,
      preferredSpeed: speedRef.current.value ?  speedRef.current.value : row.preferredSpeed,
      active: row.active,
    }));
    setIsSave(!isSave);
  };

  useEffect(() => {
    if (isSave) {
      updateNameById(payload);
    }
  }, [isSave]);

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
        <h1>
          Edit <u>{row.firstName}</u> preferences
        </h1>
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

              defaultValue={row.preferredName}
            />
          </div>
          <div className="input-group mb-4">
            <div className="input-group-append">
              <label className="input-group-text" htmlFor="select-country">
                Select Preset:
              </label>
            </div>
            <select
              ref={presetRef}
              className="form-control"
              name="select-country"
              id="select-country"
              defaultValue={row.preferredPreset}
            >
              {console.log("row: ", row)}
              <option>{"Select dropdown ..."}</option>
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
              <label className="input-group-text" htmlFor="select-speed">
                Select Speed:
              </label>
            </div>
            <select
              ref={speedRef}
              className="form-control"
              name="select-speed"
              id="select-speed"
              defaultValue={row.preferredSpeed}
            >
              <option>{"Select dropdown ..."}</option>
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
            <span onClick={onTest}>
              <PlayAudio
                type="success"
                label="Test"
                name={
                  payload
                    ? `${payload.preferredName}?preset=${payload.preferredPreset}&rate=${payload.preferredSpeed}`
                    : `${row.preferredName}?preset=${row.preferredPreset}&rate=${row.preferredSpeed}`
                }
              />
            </span>
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
