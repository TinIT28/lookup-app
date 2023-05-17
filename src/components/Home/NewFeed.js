import React from "react";
import "./NewFeed.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import HeaderPage from "../../images/HeaderPage.png";
import avt_company from "../../images/avt_company.jpg";

function NewFeed() {
  return (
    <div className="newfeed">
      <div className="newfeed_left">
        <img className="newfeed_left_bg_img" src={HeaderPage} alt="" />
        <img className="newfeed_left_avt_img" src={avt_company} alt="" />
      </div>
      <div className="newfeed_center">
        <div className="search_partner">
          <input
            className="body_top_search"
            type="text"
            placeholder="Bạn đang cần tìm đối tác?"
          />
          <button className="search_icon">
            <BsSearch />
            <p>Tìm kiếm</p>
          </button>
        </div>
      </div>
      <div className="newfeed_right">
        <p>Thêm vào bảng tin của bạn</p>
        <div className="newfeed_company">
          <img className="newfeed_left_avt_img" src={avt_company} alt="" />
          <div className="newfeed_detail_company">
            <p>Công ty</p>
            <h6>Ngành nghề</h6>
          </div>
        </div>
        <div className="newfeed_act_company">
          <div className="newfeed_icon_action1">
            <AiOutlinePlusCircle />
            <h6>Theo dõi</h6>
          </div>
          <div className="newfeed_icon_action">
            <h6>Tìm hiểu thêm</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFeed;
