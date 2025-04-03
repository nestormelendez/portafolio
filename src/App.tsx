import { Route, Routes } from "react-router-dom";
import "./App.css";
import Docs from "./pages/Docs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/navbar/Navbar";
import ArticleIcon from "@mui/icons-material/Article";
import Works from "./pages/Works";
import Form from "./pages/Form";
import Weather from './pages/Weather';
import Skeletor from "./pages/Skeletor";

function App() {
  type Props = {
    title: string;
    path: string;
    icon: React.ReactElement;
  };
  const navArrayLinks: Props[] = [
    {
      title: "Documentación",
      path: "/docs",
      icon: <ArticleIcon />,
    },
  ];
  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} />

      <Routes>
        <Route path="/" element={<Docs />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/works" element={<Works />} />
        <Route path="/form" element={<Form />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/skeletor" element={<Skeletor />} />
      </Routes>
    </>
  );
}

export default App;
