import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostListProvider from "../store/posts-list-store";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import PostList from "../components/PostList";
import Footer from "../components/Footer";
import CreatePost from "../components/CreatePost";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="content">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
