import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import css from "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
