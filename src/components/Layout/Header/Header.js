import {
  HiMenu,
  HiTranslate,
  HiOutlineChatAlt2,
  HiOutlineUsers,
} from "react-icons/hi";
import { TfiAnnouncement } from "react-icons/tfi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="Header">
        <div className="Header__item">
          <div className="Lookup">
            {" "}
            <a className="LookupLink" href="">
              LookUp.Com
            </a>
            <p className="category">
              {" "}
              <HiMenu />
              category
            </p>
          </div>
          <div className="iconHeader">
            <HiTranslate className="languageIcon" />
            <HiOutlineChatAlt2 className="chatIcon" />
            <TfiAnnouncement className="speakerIcon" />
            <HiOutlineUsers className="userIcon" />
            <a href="">Suport</a>{" "}
          </div>
        </div>
        <div className="Header__body">
          <div className="Header__body__item">
            <a className="Header__item__body" href="">
              New Feed
            </a>
            <a className="Header__item__body" href="">
              Product
            </a>
            <a className="Header__item__body" href="">
              Producer
            </a>
          </div>
          <div className="Search__header">
            <input
              className="inputHeader"
              type="text"
              placeholder="Product..."
              name=""
              id=""
            />
            <div>
              <button className="SearchIcon">
                <HiMagnifyingGlass style={{ width: "30px", height: "20px" }} />
                <h3 style={{ color: "white" }}>Search</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
