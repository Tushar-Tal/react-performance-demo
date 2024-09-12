import React, { Suspense, useState } from "react";

// Import the heavy component lazily
const loadHeavyComponent = () => import("./heavy-component");
const HeavyComponent = React.lazy(loadHeavyComponent);

function EagerLoading() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Eager loading Demo</h1>

      {/* Button to load the heavy component */}
      <button
        onClick={() => setShowHeavyComponent(true)}
        onFocus={loadHeavyComponent}
        onMouseEnter={loadHeavyComponent}
      >
        Load Heavy Component
      </button>

      {/* Use React.Suspense to display a fallback while loading the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        {showHeavyComponent && <HeavyComponent />}
      </Suspense>
    </div>
  );
}

export default EagerLoading;
