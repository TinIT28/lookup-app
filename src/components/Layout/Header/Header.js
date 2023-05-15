import { HiMenu, HiTranslate, HiOutlineChatAlt2 } from "react-icons/hi";
function Header() {
  return (
    <div>
      <div className="Header">
        <div>
          <a href="">LookUp.Com</a>
          <p>
            {" "}
            <HiMenu />
            Danh mục
          </p>
          <HiTranslate />
          <HiOutlineChatAlt2 />
        </div>
      </div>
    </div>
  );
}

export default Header;
