import "./App.css";
import prof_img from "./images/image_search_1608801989309.jpg";

import { BiShare } from "react-icons/bi";
import { FiCamera } from "react-icons/fi";

function App() {
  const user_profile_details = [
    {
      id: 1,
      id_: "t",
      name_: "Twitter Link",
      url: "https://twitter.com/henry96900698",
    },
    {
      id: 2,
      name_: "Twitter Link",
      url: "https://twitter.com/henry96900698",
    },
    {
      id: 3,
      name_: "Twitter Link",
      url: "https://twitter.com/henry96900698",
    },
    {
      id: 4,
      name_: "Twitter Link",
      url: "https://twitter.com/henry96900698",
    },
  ];

  return (
    <div className="App">
      <div
        style={{
          width: "1000px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          justifyContent: "center",
        }}
      >
        <div className="profile-section">
          <div className="avatar-share-button">
            <BiShare className="icon" size={14} color="#98A2B3" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div className="profile-img-container">
              <figure id="profile__img">
                <img src={prof_img} alt="profile-img" />
              </figure>
              <div>
                <FiCamera size={24} />
              </div>
            </div>
            <h3 id="twitter">@henry96900698</h3>
            <h3 id="slack" style={{ display: "none" }}>
              Uchechukwu Anachuna
            </h3>
          </div>
        </div>

        <div className="link-section">
          {user_profile_details.map((item) => (
            <div key={item.id} className="link-containers">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name_}
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <a
        href="https://training.zuri.team/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ZURI
      </a> */}
    </div>
  );
}

export default App;
