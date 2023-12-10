import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return <div>Home</div>;
}

function Post() {
  let params = useParams();
  return <div>Induvidual Post ID: {params.id}</div>;
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post/1">Post with ID: 1</Link>
        </li>
      </ul>
    </nav>
  );
}

function ApiCallsRouteParams() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default ApiCallsRouteParams;
