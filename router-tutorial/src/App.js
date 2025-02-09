import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profiles/:username" element={<Profile />}></Route>
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />}></Route>
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/mypage" element={<MyPage />}></Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
