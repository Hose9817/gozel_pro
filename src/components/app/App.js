import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import TeachersPage from "../pages/TeachersPage";
import OtherPage from "../pages/OtherPage";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/other" element={<OtherPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
