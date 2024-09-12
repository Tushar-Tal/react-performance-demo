// HeavyComponent.js
import React from 'react';

function HeavyComponent() {
  return (
    <div>
      <h1>This is a heavy component</h1>
      <p>
        Imagine this component contains a lot of complex logic or large assets that slow down your application if loaded upfront.
      </p>
    </div>
  );
}

export default HeavyComponent;
