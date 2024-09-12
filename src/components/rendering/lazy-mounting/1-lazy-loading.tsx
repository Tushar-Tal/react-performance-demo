import React, { Suspense, useState } from "react";

// Import the heavy component lazily
const HeavyComponent = React.lazy(() => import("./heavy-component"));

function LazyLoading() {
  const [showHeavyComponent, setShowHeavyComponent] = useState(false);

  return (
    <div style={{ margin: "20px" }}>
      <h1>React.lazy Demo</h1>

      {/* Button to load the heavy component */}
      <button onClick={() => setShowHeavyComponent(true)}>
        Load Heavy Component
      </button>

      {/* Use React.Suspense to display a fallback while loading the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        {showHeavyComponent && <HeavyComponent />}
      </Suspense>
    </div>
  );
}

export default LazyLoading;
