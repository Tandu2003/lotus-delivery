import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

const Breadcrumb = (props) => {
  const list = props.list?.map((item, index) => {
    return (
      <li className="breadcrumb__item" key={index}>
        <Link to={item.path}>
          <span className="breadcrumb-name">{item.title}</span>
          <span className="breadcrumb-separator">/</span>
        </Link>
      </li>
    );
  });

  return (
    <>
      <div className="breadcrumb-wrapper">
        <div className="container">
          <ul className="breadcrumb">
            <li className="breadcrumb__item">
              <Link to="/">
                <span className="breadcrumb-name">Trang chủ</span>
                <span className="breadcrumb-separator">/</span>
              </Link>
            </li>
            {list}
            <li className="breadcrumb__item">
              <strong>{props.breadcrumb}</strong>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
