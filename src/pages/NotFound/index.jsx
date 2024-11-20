import { Link } from "react-router-dom";
import Breadcrums from "../../components/Breadcrumb";

import "./NotFound.scss";

const NotFound = () => {
  return (
    <>
      <Breadcrums breadcrumb="Lỗi 404" />
      <div className="notfound">
        <div className="container">
          <h1>Không tìm thấy trang</h1>
          <p className="subtext">Xin lỗi, chúng tôi không tìm thấy trang này</p>
          <Link to="/">Trở về trang chủ</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
