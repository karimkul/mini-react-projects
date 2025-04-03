import { Route, Routes } from "react-router-dom";
import "./style.css";
import List from "./pages/List";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
    return (
        <div className="App">
            <h2>Social Book</h2>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="list/:id" element={<ProfileDetails />} />
            </Routes>
        </div>
    );
}

export default App;
