import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileLavina from "./pages/ProfileLavina";
import ProfileLaudy from "./pages/ProfileLaudy";
import ProfileBagas from "./pages/ProfileBagas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lavina" element={<ProfileLavina />} />
        <Route path="/laudy" element={<ProfileLaudy />} />
        <Route path="/bagas" element={<ProfileBagas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;