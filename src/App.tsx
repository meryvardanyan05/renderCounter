import { useState } from "react";
import { CApp } from "./components/class-components/CApp";
import { FApp } from "./components/functional-components/FApp";

enum ComponentType {
  Functional = "Functional",
  Class = "Class",
}

const App = () => {
  const [componentType, setComponentType] = useState(ComponentType.Class);

  const rootApp = componentType === ComponentType.Class ? <CApp /> : <FApp />;

  const handleChangeType = () => {
    if (componentType === ComponentType.Class)
      setComponentType(ComponentType.Functional);
    else setComponentType(ComponentType.Class);
  };
  return (
    <div>
      <button onClick={handleChangeType}>Switch</button>

      {rootApp}
      <CApp />
      <FApp />
    </div>
  );
};

export default App;
