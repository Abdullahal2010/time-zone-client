import React, { useState } from "react";

const Faq = ({ data }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="faq-div">
      <div className="faq-title">
        <span>{data.title}</span>
        <button
          className={`faq-toggle-btn ${show ? "show-btn-faq" : ""}`}
          onClick={() => setShow((p) => !p)}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className={`faq-desc ${show ? "" : "hidden-faq"}`}>{data.desc}</div>
    </div>
  );
};

export default Faq;
