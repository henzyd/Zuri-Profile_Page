import React from "react";

// IMAGES
import prof_img from "../images/Snapchat-1000942029.jpg";

// ICONS
import { BiShare } from "react-icons/bi";
import { FiCamera } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProfilePage = ({ user_data }) => {
  const [icon, setIcon] = useState("none");
  function enterShare() {
    console.log("yes");
    setIcon("flex");
  }
  function leaveShare() {
    setIcon("none");
  }
  return (
    <div className="Prof_App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          justifyContent: "center",
          paddingBottom: "40px",
        }}
        className="container"
      >
        <div className="profile-section">
          <p className="share_ desktop" style={{ display: icon }}>
            Share Link
          </p>
          <div
            className="avatar-share-button desktop"
            onMouseEnter={enterShare}
            onMouseLeave={leaveShare}
          >
            <BiShare className="icon" size={20} color="#98a2b3" />
          </div>
          <div className="avatar-share-button mobile">
            <BsThreeDots size={18} className="icon" color="#98A2B3" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              gap: "24px",
            }}
          >
            <div className="profile-img-container">
              <figure>
                <img id="profile__img" src={prof_img} alt="profile-img" />
              </figure>
              <div>
                <FiCamera size={22} />
              </div>
            </div>
            <h3 id="twitter">henry96900698</h3>
            <h3 id="slack" style={{ display: "none" }}>
              henzyd
            </h3>
          </div>
        </div>

        <div className="link-section">
          {user_data.map((item) => (
            <a
              href={item.url}
              className="link-containers"
              target="_blank"
              rel="noopener noreferrer"
              id={item.id_ ? item.id_ : ""}
              title={item.title ? item.title : ""}
              key={item.id}
              style={{ textAlign: "center" }}
            >
              <div key={item.id}>
                {/* <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={item.id_ ? item.id_ : ""}
                  title={item.title ? item.title : ""}
                  style={{ textAlign: "center" }}
                >
                </a> */}
                {item.name_}
              </div>
            </a>
          ))}
          <Link to={"/contact"} id={"contact"} className="link-containers">
            Contact Me
          </Link>
        </div>

        <div className="social-icons">
          <svg
            width={24}
            height={24}
            enableBackground="new 0 0 2447.6 2452.5"
            viewBox="0 0 2447.6 2452.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipRule="evenodd" fillRule="evenodd">
              <path
                d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                fill="#36c5f0"
              />
              <path
                d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                fill="#2eb67d"
              />
              <path
                d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                fill="#ecb22e"
              />
              <path
                d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                fill="#e01e5a"
              />
            </g>
          </svg>
          <svg
            height="24"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="24"
            data-view-component="true"
            className="octicon octicon-mark-github v-align-middle"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
