import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This is an BLOG WEBSITE{" "}
        <a href="https://www.jnn.com">HAYDEN</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/blogpostsone">BlogPostsOne</Link>
        </li>
        <li>
          <Link to="/blogpoststwo">BlogPostsTwo</Link>
        </li>
        <li>
          <Link to="/blogpoststhree">BlogPostsThree</Link>
        </li>
        <li>
          <Link to="/blogpostsfour">BlogPostsFour</Link>
        </li>
        <li>
          <Link to="/blogpostsfive">BlogPostsFive</Link>
        </li>
        <li>
          <Link to="/blogpostssix">BlogPostsSix</Link>
        </li>
        <li>
          <Link to="/blogpostsseven">BlogPostsSeven</Link>
        </li>
        <li>
          <Link to="/blogpostseight">BlogPostsEight</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
