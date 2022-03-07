import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import css from "./App.css";
import NavBar from "./components/NavBar";
import TopicPage from "./components/TopicPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:topic" element={<TopicPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
