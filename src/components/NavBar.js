import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";
import LoginButton from "./LoginButton";

export default function NavBar() {
  const [topics, setTopics] = useState([]);
 
  useEffect(() => {
    api.fetchTopics().then(({ topics }) => {
      setTopics(topics);
    });
    
  }, []);

  return (
    <div className="mb-4"><Link className="has-text-weight-bold" to="/">
        NC News
      </Link>
    <div className="is-centered tabs is-boxed is-size-7-mobile ">
      
      <ul>
        <li >
          <Link className="has-text-dark" to="/">
            All
          </Link>
        </li>
      
        {topics.map(({ slug }) => {
          return (
            <li key={slug}>
              <Link  to={`/${slug}`}>
                {slug.charAt(0).toUpperCase() + slug.slice(1)}{" "}
              </Link>
            </li>
          );
        })}
          <li> <LoginButton /></li>
      </ul>
    </div>
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
