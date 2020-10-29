import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Blog from "./components/Blog";
import About from "./components/About";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="h-full bg-gray-200">
      <Header />

      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={Post} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
