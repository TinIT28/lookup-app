import { AiFillCheckCircle, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";

import { Button, Container, Row, Col } from "react-bootstrap";

import "./Home.css";
function Home() {
  return (
    <Container>
      <div className="body_top">
        <div className="body_left">
          <div className="body_top_item1">
            <div className="body_top_item1_welcome"> Chào mừng bạn đến với</div>
            <a className="body_top_item1_lookup" href="">
              LookUp.com
            </a>
            <div className="body_top_item1_detai">
              <AiFillCheckCircle className="check_icon" />
              <p>Trải nghiệm tính năng cao cấp với gói Premium miễn phí!</p>
            </div>
            <button className="body_top_button_register">Đăng ký ngay!</button>
          </div>
          <div className="body_top_item4">
            <h6 className="title_event">
              Sự kiện đang diễn ra <br /> có thể bạn quan tâm
            </h6>
            <div className="event_detail">
              <img
                className="img_event"
                src="https://cdn.mos.cms.futurecdn.net/V6LCHNxfSPT2Sxpr4bAzD.jpg"
                alt=""
              />
            </div>
            <div className="date_time_event">
              <p className="title_event">Đồ ăn thức uống</p>
              <p className="title_event">Ngày 10 tháng 7 năm 2023</p>
            </div>
            <div className="envent_detail_more">
              <a href=""> Tìm hiểu thêm</a>
            </div>

            <div className="event_detail">
              <img
                className="img_event"
                src="https://cdn.mos.cms.futurecdn.net/V6LCHNxfSPT2Sxpr4bAzD.jpg"
                alt=""
              />
            </div>
            <div className="date_time_event">
              <p className="title_event">Đồ ăn thức uống</p>
              <p className="title_event">Ngày 10 tháng 7 năm 2023</p>
            </div>
            <div className="envent_detail_more">
              <a href=""> Tìm hiểu thêm</a>
            </div>
            <div className="event_detail">
              <img
                className="img_event"
                src="https://cdn.mos.cms.futurecdn.net/V6LCHNxfSPT2Sxpr4bAzD.jpg"
                alt=""
              />
            </div>
            <div className="date_time_event">
              <p className="title_event">Đồ ăn thức uống</p>
              <p className="title_event">Ngày 10 tháng 7 năm 2023</p>
            </div>
            <div className="envent_detail_more">
              <a href=""> Tìm hiểu thêm</a>
            </div>
          </div>
        </div>
        <div className="body_center">
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

          <div className="body_top_item2">
            <h3>
              Bạn đang cần tìm đối tác, khách hàng? Đăng ký miễn phí ngay tại
              LookUp.com!
            </h3>
            <button className="body_top_button_register">Đăng ký ngay!</button>
            <div className="have_account">
              <p>Bạn đã có tài khoản?</p>
              <a href="">Đăng nhập</a>
            </div>
          </div>

          <div className="body_top_item5">
            <div className="post_detail">
              <img
                className="img_company"
                src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
                alt=""
              />
              <div className="post_title">
                <h3>Thuc Bui</h3>
                <p>Được tài trợ</p>{" "}
              </div>
            </div>
            <h6>Nội dung bài viết...</h6>

            <img
              className="img_post"
              src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
              alt=""
            />
            <div>
              <div className="total_like_cmt">
                <div className="total_like">
                  <AiFillLike />
                  <p>1.2k</p>
                </div>
                <p>50 Bình luận</p>
              </div>
              <div className="act_post">
                <div className="item_act">
                  <AiOutlineLike className="item_like_cmt_send" />
                  <h5 className="item_act_post">yêu Thích</h5>
                </div>
                <div className="item_act">
                  <FaRegComment className="item_like_cmt_send" />
                  <h5 className="item_act_post">Bình luận</h5>
                </div>
                <div className="item_act">
                  <TbSend className="item_like_cmt_send" />
                  <h5 className="item_act_post">Gửi tin nhắn</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body_top_item3">
          <img
            className="body_top_item3_img_ads"
            src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
            alt=""
          />
          <div className="body_top_item3_detail_ads">
            <img
              className="img_company2"
              src="https://i.pinimg.com/originals/39/88/85/398885df3f6e523828d80cf867a77039.jpg"
              alt=""
            />
            <div>
              <h3>Công ty Thức Bùi</h3>
              <p>Coder</p>
            </div>
          </div>
          <div className="suport">
            <div className="suport_left">
              <a className="suport_detail" href="">
                {" "}
                Giới thiệu
              </a>
              <a className="suport_detail" href="">
                Chính sách
              </a>
              <a className="suport_detail" href="">
                Tải ứng dụng
              </a>
            </div>
            <div className="suport_right">
              <a className="suport_detail" href="">
                Liên hệ
              </a>
              <a className="suport_detail" href="">
                Trợ giúp
              </a>
              <a className="suport_detail" href="">
                Xem thêm
              </a>
            </div>
          </div>
          <a href="">LookUp.com</a>
        </div>
      </div>
    </Container>
  );
}
export default Home;
