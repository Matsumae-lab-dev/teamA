//App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./views/signin";
import Todolist from "./views/Todolist_app"
import Resister from "./views/resister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Signin />} />
        <Route path={`/Resister`} element={ <Resister /> }></Route>
        <Route path={`/Todolist`} element={<Todolist/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;