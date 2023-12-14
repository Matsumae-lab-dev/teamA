//App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./views/signin";
import Top from "./views/top"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Signin />} />
        <Route path={`/Top`} element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;