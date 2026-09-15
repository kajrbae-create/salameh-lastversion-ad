import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main_Page";
import Login from "./Login";
import Password from "./Password";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Password />} path="/password" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
