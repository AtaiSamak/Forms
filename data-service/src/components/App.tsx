import { Container } from "@mui/material";
import Creation from "./creation/Creation";
import { Routes, Route } from "react-router-dom";
import Navigator from "./Navigator";
import "../styles/app.scss";

function App() {
    return (
        <>
            <Navigator />
            <Container maxWidth="md" className="App">
                <Routes>
                    <Route path="/creation" element={<Creation />} />
                    <Route path="/responses" element={<Creation />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
