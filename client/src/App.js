import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import HomePage from "./pages/components/Početna/HomePage/HomePage";
import Putovanja from "./pages/components/Putovanja/Page/Putovanja";
import Podrska from "./pages/components/Podrška/Podrska";
import ONama from "./pages/components/O nama/ONama";
import Blog from "./pages/components/Blog/Blog";
import Kosarica from "./pages/components/Košarica/Kosarica";
import Create from "./pages/components/Create/create";
import Footer from "./pages/components/Footer/Footer";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Putovanja" element={<Putovanja />}></Route>
          <Route path="/Podrska" element={<Podrska />}></Route>
          <Route path="/oNama" element={<ONama />}></Route>
          {/* <Route path="/Blog" element={<Blog />}></Route> */}
          <Route path="/Blog" element={<IndexPage />}></Route>
          <Route path="/Kosarica" element={<Kosarica />}></Route>
          {/* <Route path="/Login" element={<Login />}></Route> */}
          <Route path="/blog/post/:id" element={<PostPage />} />
          <Route path="/Create" element={<Create />}></Route>
          {/* <Route path="/Register" element={<Register />}></Route> */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
