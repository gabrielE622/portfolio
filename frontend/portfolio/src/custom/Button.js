import React from 'react';

function Button({ title = "Click Me!", type = "custom-button"}) {
  
  return (
    <button className={`${type}`}>
      {title}
    </button>
  );
}

export default Button;
