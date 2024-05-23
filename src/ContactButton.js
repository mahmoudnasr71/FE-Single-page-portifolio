import React from "react";

export function ContactButton({ marginTop, marginBottom, text, onClick }) {
  const style = {
    marginTop: marginTop,
    marginBottom: marginBottom,
  };
  return (
    <button style={style} className="contact-button" onClick={onClick}>
      {text}
    </button>
  );
}
