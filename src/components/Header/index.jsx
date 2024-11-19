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

import { locations } from "../../assets/data/header";

const Header = () => {
  const products = [];

  const resultSearch = products.filter((product) => (product.title || "").includes(inputSearch));

  const cartItemCount = 0; // Số lượng sản phẩm trong giỏ hàng
  const [isShowLocation, setIsShowLocation] = useState(false);
  const [location, setLocation] = useState(locations[0].districts[2].address[0].name);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  const handleShowLocation = () => {
    setIsShowLocation(!isShowLocation);
  };

  // Chọn tỉnh thành phố, thiết lập giá trị cho selectedProvince và reset giá trị selectedDistrict
  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedDistrict("");
  };

  // Chọn quận huyện, thiết lập giá trị cho selectedDistrict
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  // Lấy danh sách quận huyện theo tỉnh thành phố đã chọn
  const filteredDistricts =
    locations.find((item) => item.province === selectedProvince)?.districts || [];

  // Lấy danh sách địa chỉ theo quận huyện và tỉnh thành phố đã chọn
  const listAddress = selectedDistrict
    ? // Nếu đã chọn quận, lấy địa chỉ trong quận đã chọn
      filteredDistricts.find((item) => item.district === selectedDistrict)?.address || []
    : selectedProvince
    ? // Nếu chỉ chọn tỉnh, lấy tất cả địa chỉ của các quận trong tỉnh
      filteredDistricts.flatMap((district) => district.address)
    : !selectedProvince && !selectedDistrict
    ? // Nếu không chọn gì, lấy tất cả địa chỉ từ mọi tỉnh và quận
      locations.flatMap((location) => location.districts.flatMap((district) => district.address))
    : [];

  const renderAddressList = (addresses) => {
    return addresses.map((address, index) => {
      return (
        <div
          key={index}
          className="address-item"
          onClick={() => {
            setLocation(address.name);
            setIsShowLocation(false);
          }}
        >
          <img src={location_dropdown} alt="location-dropdown" />
          <span className="address-item-text">{address.name}</span>
        </div>
      );
    });
  };

  const handleSearchChange = (e) => {
    setInputSearch(e.target.value);
  };

  const renderResultSearch = (results) => {
    return results?.slice(0, 5).map((item, index) => (
      <div key={index} className="result-item">
        <div className="result-item-info">
          <p className="result-item-name">{item.name}</p>
          <p className="result-item-price">{item.price}₫</p>
        </div>
        <img src={item.image} alt={item.name} />
      </div>
    ));
  };

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
                <div className="header-location-head" onClick={handleShowLocation}>
                  <img src={location_dot} alt="location-dot" />
                  <div className="location-head-content">
                    <p className="location-head-title">Giao hàng tới:</p>
                    <span className="location-head-address">
                      <b>{location}</b>
                    </span>
                  </div>
                  <img src={chevron_down} alt="chevron-down" />
                </div>

                {/* Start popup location */}
                <div className="header-location-popup">
                  <div className={`location-dropdown  ${isShowLocation ? "show" : ""}`}>
                    <div className="dropdown-content">
                      <div className="content-header">
                        <p className="content-title">Khu vực mua hàng</p>
                      </div>
                      <div className="content-body">
                        {/* Select filter for Province and District */}
                        <div className="box-select">
                          <div className="filter-select">
                            <div className="select-item">
                              <label htmlFor="filter-province">Tỉnh/Thành phố</label>
                              <div className="field-select">
                                <select className="filter-province" onChange={handleProvinceChange}>
                                  <option value="">Chọn tỉnh/thành phố</option>
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
                                  <option value="">Chọn quận/huyện</option>
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

                        {/* Address Information */}
                        <div className="box-address">
                          <p className="box-address-title">Giao hoặc đến lấy tại:</p>
                          <b className="box-address-content">{location}</b>
                        </div>

                        {/* Nearby Store Selection */}
                        <div className="box-province">
                          <span className="text-province">
                            Chọn cửa hàng gần bạn nhất để tối ưu chi phí giao hàng. Hoặc đến lấy
                            hàng
                          </span>
                          <div className="list-address">{renderAddressList(listAddress)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End popup location */}
              </div>

              <div className="header-center-search">
                <form action="/search">
                  <button type="submit">
                    <img src={btn_search} alt="btn-search" />
                  </button>
                  <input type="hidden" name="type" value="product" />
                  <input
                    type="text"
                    name="q"
                    placeholder="Nhập từ khóa tìm kiếm"
                    onChange={handleSearchChange}
                  />
                </form>
                {/* Start popup search suggest */}
                {resultSearch.length > 0 && (
                  <div className={`header-search-suggest`}>
                    <div className="result-content">
                      <div className="result-list">
                        {renderResultSearch(resultSearch)}
                        <Link
                          to={`/search?type=product&q=filter=(title:product%20contains%20${inputSearch})`}
                        >
                          {resultSearch.length > 5 && (
                            <div className="result-more">
                              Xem thêm {resultSearch.length - 5} kết quả
                            </div>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
                {/* End popup search suggest */}
              </div>
            </div>
            <div className="header-right">
              <Link to="/cart" className="header-right-cart">
                <img src={shopping_cart} alt="shopping-cart" />
                <span className="header-right-cart-text">Giỏ hàng</span>
                <span className="header-right-cart-quantity">{cartItemCount}</span>
              </Link>
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
