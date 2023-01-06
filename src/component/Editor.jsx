import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = ({ title, language, value, onChange }) => {
  const [open, setOpen] = useState(true);
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className={`editor-container ${open ? " " : "collapsed"}`}>
      <div className="editor-title">
        {title}
        <button
          className="expand-collapse-btn"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>

      <ControlledEditor
        onBeforeChange={handleChange}
        className="code-mirror-wrapper"
        value={value}
        options={{
          lineWrapping: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editor;
