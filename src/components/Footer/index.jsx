import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const footerData = {
    footerDataTop: [
      {
        category: "Về Lotus Delivery",
        class: "menu",
        items: [
          { title: "Thông tin xuất xứ sản phẩm", link: "/pages/thong-tin-xuat-xu-san-pham" },
          {
            title: "Phương thức đặt hàng và giao hàng",
            link: "/pages/phuong-thuc-dat-hang-va-giao-hang",
          },
          { title: "Chính sách kiểm hàng, đổi trả", link: "/pages/chinh-sach-doi-tra" },
          { title: "Quy trình khiếu nại", link: "/pages/quy-trinh-khieu-nai" },
          { title: "Chính sách bảo mật thông tin", link: "/pages/chinh-sach-bao-mat" },
          {
            title: "Giấy phép An Toàn Thực Phẩm",
            link: "https://drive.google.com/drive/folders/1awvQdH3I6eNidNJu1J0j-duUS5ma7BiT?usp=sharing",
          },
          { title: "Blog", link: "/blogs/brand-a" },
        ],
      },
      {
        category: "Phương thức thanh toán",
        class: "payment",
        items: [
          {
            method: "Tiền mặt",
            image:
              "https://res.cloudinary.com/dflpparty/image/upload/v1731361859/LotusDelivery/footer_top_payment_image_3_w3pere.webp",
          },
          {
            method: "Payoo",
            image:
              "https://res.cloudinary.com/dflpparty/image/upload/v1731361880/LotusDelivery/footer_top_payment_image_4_jef3jq.webp",
          },
          { title: "Chính sách thanh toán", link: "/pages/chinh-sach-thanh-toan" },
        ],
      },
      {
        category: "Truyền thông xã hội",
        class: "social",
        items: [
          {
            title: "Fanpage Lotus Delivery",
            alt: "facebook",
            image:
              "https://res.cloudinary.com/dflpparty/image/upload/v1731361904/LotusDelivery/footer_top_social_image_1_avltxq.png",
            link: "https://lotusdelivery.vn/",
          },
          {
            title: "Báo Cánh Sen Lotus Group",
            alt: "facebook",
            image:
              "https://res.cloudinary.com/dflpparty/image/upload/v1731361904/LotusDelivery/footer_top_social_image_1_avltxq.png",
            link: "https://www.facebook.com/baocanhsen",
          },
          {
            title: "Lotus Group",
            alt: "hoasen",
            image:
              "https://res.cloudinary.com/dflpparty/image/upload/v1731361905/LotusDelivery/footer_top_social_image_3_l9qntt.webp",
            link: "https://lotusgroup.com.vn/",
          },
        ],
      },
      {
        category: "Hỗ trợ khách hàng",
        class: "info",
        items: [
          { title: "Hotline", details: ["089-616-2338 (Miền Bắc)", "089-616-2338 (Miền Nam)"] },
          { title: "Mua hàng", details: "089-616-2338" },
          { title: "Email", details: "mkt-vlotus@lotusgroup.com.vn" },
        ],
      },
    ],
    footerDataBot: {
      left: {
        title: "Công ty cổ phần Toridoll V Lotus",
        address: "215 – 217 Lý Tự Trọng, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
        taxCode:
          "0312537015 thay đổi lần thứ 15, ngày 15/12/2023. Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch và Đầu tư TP.HCM",
      },
      right: {
        link: "http://online.gov.vn/Home/WebDetails/97343",
        image:
          "https://res.cloudinary.com/dflpparty/image/upload/v1731362528/LotusDelivery/footer_bot_bct_image_nsq2gh.webp",
        alt: "bct",
        copyright: "© 2022 Lotus Group. Bảo lưu mọi quyền.",
      },
    },
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-wrap">
          {footerData.footerDataTop.map((category, index) => (
            <div className={category.class + " footer-top-item"} key={index}>
              {category.class === "menu" && (
                <>
                  <h4>{category.category}</h4>
                  <ul>
                    {category.items.map((item, index) => (
                      <li key={index}>
                        <Link to={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {category.class === "payment" && (
                <>
                  <h4>{category.category}</h4>
                  <ul>
                    {category.items.slice(0, 2).map((item, index) => (
                      <li key={index}>
                        <img src={item.image} alt={item.method} />
                      </li>
                    ))}
                  </ul>
                  <ul>
                    <li>
                      <Link to={category.items[2].link}>{category.items[2].title}</Link>
                    </li>
                  </ul>
                </>
              )}
              {category.class === "social" && (
                <>
                  <h4>{category.category}</h4>
                  <ul>
                    {category.items.map((item, index) => (
                      <li key={index}>
                        <img src={item.image} alt={item.alt} />
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <span>{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {category.class === "info" && (
                <>
                  <h4>{category.category}</h4>
                  <ul>
                    {category.items.map((item, index) => (
                      <li key={index}>
                        <span>{item.title}</span>
                        {Array.isArray(item.details) ? (
                          <p>
                            {item.details.map((detail, index) => {
                              return (
                                <span key={index}>
                                  {detail}
                                  <br />
                                </span>
                              );
                            })}
                          </p>
                        ) : (
                          <p>{item.details}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bot">
        <div className="footer-bot-wrap">
          <div className="footer-bot-left">
            <h4>{footerData.footerDataBot.left.title}</h4>
            <p>Địa chỉ: {footerData.footerDataBot.left.address}</p>
            <p>Mã số thuế: {footerData.footerDataBot.left.taxCode}</p>
          </div>
          <div className="footer-bot-right">
            <a href={footerData.footerDataBot.right.link} target="_blank" rel="noopener noreferrer">
              <img
                src={footerData.footerDataBot.right.image}
                alt={footerData.footerDataBot.right.alt}
              />
            </a>
            <p>{footerData.footerDataBot.right.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
