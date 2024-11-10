import "./Header.scss";

import logo from "../../assets/img/logo.webp";
import location_dot from "../../assets/svg/location-dot.svg";
import chevron_down from "../../assets/svg/chevron-down.svg";
import btn_search from "../../assets/svg/btn-search.svg";
import shopping_cart from "../../assets/svg/shopping-cart.svg";
import account_user from "../../assets/svg/account-user.svg";
import location_dropdown from "../../assets/svg/location-dropdown.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const locations = [
    {
      id: 1,
      province: "Hồ Chí Minh",
      districts: [
        {
          id: 1,
          district: "Quận 1",
          address: [
            {
              id: 1,
              name: "CoCo Ichibanya 13 Lý Tự Trọng 13 Lý Tự Trọng, Phường Bến Nghé, Quận 1",
            },
            {
              id: 2,
              name: "Marukame Udon Bến Thành 215-217 Lý Tự Trọng, P.Bến Thành, Q.1, Phường Bến Thành, Quận 1",
            },
            { id: 3, name: "Conservo tầng trệt 13 Lý Tự Trọng, Phường Bến Nghé, Quận 1" },
            {
              id: 4,
              name: "Yoshinoya 13 Lý Tự Trọng Tầng 2, 13 Lý Tự Trọng, Phường Bến Nghé, Quận 1",
            },
            { id: 5, name: "Bánh Mì Huỳnh Hoa 26 Lê Thị Riêng, Phường Phạm Ngũ Lão, Quận 1" },
            {
              id: 6,
              name: "Marukame Udon Tân Định 342 - 344 Hai Bà Trưng, Phường Tân Định, Quận 1",
            },
            { id: 7, name: "CoCo Ichibanya Bến Thành 256 Lê Thánh Tôn, Phường Bến Thành, Quận 1" },
          ],
        },
        {
          id: 2,
          district: "Quận 10",
          address: [
            {
              id: 1,
              name: "Marukame Udon - Vạn Hạnh Mall Tầng 6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12, Quận 10",
            },
          ],
        },
        {
          id: 3,
          district: "Quận Bình Thạnh",
          address: [
            {
              id: 1,
              name: "CoCo Ichibanya Landmark 81 Tầng L2 TTTM Vincom Center Landmark 81, Số 772 ĐIện Biên Phủ, Phường 22, Quận Bình Thạnh",
            },
          ],
        },
        {
          id: 4,
          district: "Thành Phố Thủ Đức",
          address: [
            {
              id: 1,
              name: "Marukame Udon Thảo Điền 27 Thảo Điền, Phường Thảo Điền, Thành phố Thủ Đức",
            },
          ],
        },
      ],
    },
  ];

  const cartItemCount = 0;
  const defaultLocation = locations[0].districts[2].address[0].name;

  const [isShowLocation, setIsShowLocation] = useState(false);
  const [location, setLocation] = useState(defaultLocation);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleShowLocation = () => setIsShowLocation(!isShowLocation);

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedDistrict("");
  };

  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);

  const filteredDistricts = selectedProvince
    ? locations.find((loc) => loc.province === selectedProvince)?.districts || []
    : [];

  const list_adress = selectedDistrict
    ? filteredDistricts.find((dist) => dist.district === selectedDistrict)?.address || []
    : selectedProvince
    ? filteredDistricts.flatMap((dist) => dist.address)
    : locations.flatMap((loc) => loc.districts.flatMap((dist) => dist.address));
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrap">
            <div className="header-left">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header-center">
              <div className="header-center-location">
                <div className="header-location-head">
                  <img src={location_dot} alt="location-dot" />
                  <div className="location-head-content">
                    <p className="location-head-title">Giao hàng tới:</p>
                    <span className="location-head-address">
                      <b>{location}</b>
                    </span>
                  </div>
                  <img src={chevron_down} alt="chevron-down" />
                </div>
                {/* Start popup locaiton */}
                <div className="header-location-popup hide">
                  <div className="location-dropdown">
                    <div className="dropdown-content">
                      <div className="content-header">
                        <p className="content-title">Khu vực mua hàng</p>
                      </div>
                      <div className="content-body">
                        <div className="box-select">
                          <div className="filter-select">
                            <div className="select-item">
                              <label htmlFor="filter-province">Tỉnh/Thành phố</label>
                              <div className="field-select">
                                <select className="filter-province" onChange={handleProvinceChange}>
                                  <option value="null">Chọn tỉnh/thành phố</option>
                                  {locations.map((item, index) => (
                                    <option key={index} value={item.province}>
                                      {item.province}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="select-item">
                              <label htmlFor="filter-district">Quận/Huyện</label>
                              <div className="field-select">
                                <select className="filter-district" onChange={handleDistrictChange}>
                                  <option value="null">Chọn quận/huyện</option>
                                  {filteredDistricts.map((dist, index) => (
                                    <option key={index} value={dist.district}>
                                      {dist.district}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="box-address">
                          <span className="box-address-title">Giao hoặc đến lấy tại:</span>
                          <span className="box-address-content">{location}</span>
                        </div>
                        <div className="box-province">
                          <span className="text-province">
                            Chọn cửa hàng gần bạn nhất để tối ưu chi phí giao hàng. Hoặc đến lấy
                            hàng
                          </span>
                          <div className="list-address">
                            {list_adress.map((item, index) => (
                              <div key={index} className="address-item">
                                <img src={location_dropdown} alt="location-dropdown" />
                                <span className="address-item-text">{item.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End popup locaiton */}
              </div>
              <div className="header-center-search">
                <form action="/search">
                  <button type="submit">
                    <img src={btn_search} alt="btn-search" />
                  </button>
                  <input type="hidden" name="type" value="product" />
                  <input type="text" name="q" placeholder="Nhập từ khóa tìm kiếm" />
                </form>
                {/* Start popup search suggest */}
                <div className="header-search-suggest hide">
                  <div className="result-content">{/* map list result search */}</div>
                </div>
                {/* End popup search suggest */}
              </div>
            </div>
            <div className="header-right">
              <div className="header-right-cart">
                <img src={shopping_cart} alt="shopping-cart" />
                <span className="header-right-cart-text">Giỏ hàng</span>
                <span className="header-right-cart-quantity">{cartItemCount}</span>
              </div>
              <div className="header-right-account_user">
                <img src={account_user} alt="account-user" />
                <span className="header-right-account_user-text">Đăng nhập</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
