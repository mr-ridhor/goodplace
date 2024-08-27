import { useState } from "react";

import "./App.css";
import Leftpane from "./Leftpane";
import Personal from "./auth/Personal";

import Company from "./auth/Company";
import Main from "./auth/main";
import Team from "./auth/Team";
import Register from "./auth/Register";
import Verification from "./auth/Verfication";
import Sub from "./auth/Sub";

function App() {
  const [currentForm, setCurrentForm] = useState<number>(1);
  const nextForm = () => {
    if (currentForm < 6) {
      setCurrentForm(currentForm + 1);
    }
  };
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <Personal nextForm={nextForm} />;
      case 2:
        return <Company nextForm={nextForm} />;
      case 3:
        return <Team nextForm={nextForm} />;
      case 4:
        return <Register nextForm={nextForm} />;
      case 5:
        return <Verification nextForm={nextForm} />;
      case 6:
        return <Sub nextForm={nextForm} />;
      default:
        return <Personal nextForm={nextForm} />;
    }
  };
  return (
    <div className=" overflow-y-aut0 no-scrollbar flex  max-h-scree">
      <Leftpane currentForm={currentForm} />

      <Main curr={currentForm}>{renderForm()}</Main>
    </div>
  );
}

export default App;
