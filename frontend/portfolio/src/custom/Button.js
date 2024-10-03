import React from 'react';

function Button({ title = "Click Me!", type = "custom-button", func}) {
  
  return (
    <button className={`${type}`} onClick={func}>
      {title}
    </button>
  );
}

export default Button;
