//App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./views/signin.tsx";
import Top from "./views/top.tsx"
import Todolist_app from "./views/Todolist_app.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Signin />} />
        <Route path={`/Top`} element={<Top />} />
        <Route path={`/Todolist_app`} element={<Todolist_app/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;