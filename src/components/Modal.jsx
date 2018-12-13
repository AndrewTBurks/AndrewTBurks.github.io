import React from 'react';

export default function Modal(props) {
  console.log(props);

  return <div className="modal-overlay" 
    onClick={props.onClose} 
    style={{ opacity: props.open ? 1 : 0, pointerEvents: props.open ? "all" : "none" }}>
      <div className="modal" onClick={(e) => {e.stopPropagation()}}>
        <div className="closeButton" onClick={props.onClose}>
          <i className="fa-2x fas fa-times" />
        </div>
        {props.children}
      </div>
    </div>;
}