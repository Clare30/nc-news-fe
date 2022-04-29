import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { loggedInUser } from "./components/context";
import ArticleList from "./components/ArticleList";
import ErrorPage from "./components/ErrorPage";
import NavBar from "./components/NavBar";
import SingleArticle from "./components/SingleArticle";
import Users from "./components/Users";

function App() {
  const [loggedIn, setLoggedIn] = useState("");
  return (
    <loggedInUser.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<ArticleList />} />
            <Route path="/topics/:topic" element={<ArticleList />} />
            <Route path="/articles/:id" element={<SingleArticle />} />
            <Route path="/login" element={<Users />} />
          </Routes>
        </div>
      </BrowserRouter>
    </loggedInUser.Provider>
  );
}

export default App;
