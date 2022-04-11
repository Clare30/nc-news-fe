import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";
import LoginButton from "./LoginButton";
import Expandable from "./Expandable";

export default function NavBar() {
  const [topics, setTopics] = useState([]);
  const [isActive, setisActive] = useState("");

  useEffect(() => {
    api.fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
    // if (window.innerWidth < 1024) {
    //   setisActive("is-active");
    // }
  }, []);

  return (
    <div class="tabs is-boxed is-centered has-background-dark has-shadow is-size-7-mobile is-fullwidth is-fixed-top">
      <Link className="has-text-weight-bold has-text-light" to="/">
        NC News
      </Link>
      <ul>
        <li>
          <Link className="has-text-light navbar-item" to="/">
            All
          </Link>
        </li>
      
        {topics.map(({ slug }) => {
          return (
            <li>
              <Link className="has-text-light navbar-item" key={slug} to={`/${slug}`}>
                {slug.charAt(0).toUpperCase() + slug.slice(1)}{" "}
              </Link>
            </li>
          );
        })}
          <li> <LoginButton /></li>
      </ul>
    </div>
  );

  // return (
  //   <div className="mb-5">
  //     <nav className="navbar has-background-primary-dark has-shadow" role="navigation" aria-label="main navigation">
  //       {/* <Expandable classAssign="is-hidden-desktop navbar-burger" textOpen={"Hi"} textClose={"Hide"}> */}
  //       <div className={"navbar-menu is-active"}>
  //         <div className="navbar-start">
  //           <Link className="has-text-light navbar-item has-text-weight-bold" to="/">
  //             NC News
  //           </Link>
  //         </div>
  //         <div className="navbar-end is-size-7-mobile ">
  //           <Link className="has-text-light navbar-item" to="/">
  //             All
  //           </Link>
  //           {topics.map(({ slug }) => {
  //             return (
  //               <Link className="has-text-light navbar-item" key={slug} to={`/${slug}`}>
  //                 {slug.charAt(0).toUpperCase() + slug.slice(1)}{" "}
  //               </Link>
  //             );
  //           })}

  //          
  //         </div>
  //       </div>
  //       {/* </Expandable> */}
  //     </nav>
  //   </div>
  // );
}
