import "./App.css";
import { Route, Routes } from "react-router-dom";

import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";

function App() {
  const user_profile_details = [
    {
      id: 1,
      // id_: "t",
      name_: "Twitter Link",
      url: "https://twitter.com/henry96900698",
    },
    {
      id: 2,
      id_: "btn__zuri",
      name_: "Zuri Team",
      // title: "f",
      url: "https://training.zuri.team/",
    },
    {
      id: 3,
      id_: "books",
      name_: "Zuri Books",
      title: "Get books that will improve you design and coding skills",
      url: "http://books.zuri.team",
    },
    {
      id: 4,
      id_: "book__python",
      name_: "Python Books",
      title: "A Python course book for beginners",
      url: "https://books.zuri.team/python-for-beginners?ref_id=Uche",
    },
    {
      id: 5,
      id_: "pitch",
      name_: "Background Check for Coders",
      title: "Certified background checker for programmers",
      url: "https://background.zuri.team",
    },
    {
      id: 6,
      id_: "book__design",
      name_: "Design Books",
      title: "Do you want to get free design books?",
      url: "https://books.zuri.team/design-rules",
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<ProfilePage user_data={user_profile_details} />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
