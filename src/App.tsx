import { RouterProvider } from "react-router-dom";

import router from "./_shared/routes";

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
