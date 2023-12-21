import TextEditor from "./TextEditor";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Design from "./Design";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to={`/documents/${uuidV4()}`} />}
        />
        <Route path="/aswin" element={<Design />} />
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
