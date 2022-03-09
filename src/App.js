import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:topic" element={<ArticleList />} />
          <Route path="/articles/:id" element={<SingleArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
