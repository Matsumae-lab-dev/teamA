//App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./views/signin";
import Top from "./views/top"
import Todolist from "./views/Todolist_app"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Signin />} />
        <Route path={`/Top`} element={<Top />} />
        <Route path={`/Todolist`} element={<Todolist/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;