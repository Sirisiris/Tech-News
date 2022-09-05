import './App.css';
import ContentList from '../src/components/ContentList';
import { useState,useEffect } from 'react';
import axios from "axios";
import NavBar from './components/NavBar';

function App() {

  //consumo de la Api

  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tech&from=2022-08-14&apiKey=931f99f8b8bb4d07996f4ba09eb0273b`
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

const searcher = (e) => {
    setSearch(e.target.value);
}

const filterArticles = articles.filter((articles) => {
    return articles.title.toLowerCase().includes(search.toLowerCase())
})

  return (
    <div className="App">
      <NavBar searcher={searcher}/>
      <ContentList articles={filterArticles}/>
    </div>
  );
}

export default App;
