/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterProvider } from "react-router-dom";

import router from "./_shared/routes";
import { Loader } from "rsuite";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./_shared/services/fireBase";

function App() {
  const [user, setUser] = useState<any>("adams");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (user === "adams") {
    return (
      <div style={{ height: "100vh", background: "#ffffff" }}>
        <Loader center content="loading..." size="lg" vertical />
      </div>
    );
  }

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
