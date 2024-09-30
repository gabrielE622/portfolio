import React from 'react';

function Button({ title = "Click Me!" }) {
  return (
    <button className="custom-button">
      {title}
    </button>
  );
}

export default Button;
