import React from "react";
import '../App.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import Toggle from "./Toggle";

function Field(props) {
  const handleInputChange = (e) => {
    props.onFieldChange(props.id, e.target.name, e.target.value);
  };

  return (
    <div className="field">
      <label>
        <input
        className="text-box"
          type="text"
          name="label"
          placeholder="----"
          value={props.label}
          onChange={handleInputChange}
        />
      </label>
      <label>
        
        <select className="dropdown" name="type" value={props.type} onChange={handleInputChange}>
          <option value="">-Select Type-</option>
          <option value="string">STRING</option>
          <option value="number">INTEGER</option>
          <option value="boolean">BOOLEAN</option>
          <option value="object">OBJECT</option>
        </select>
      </label>
  
      <Toggle />
      <RiDeleteBin6Line className="react-icons" onClick={() => props.onRemoveField(props.id)}/>
      <hr class="solid"></hr>
    </div>
  );
}

export default Field;
