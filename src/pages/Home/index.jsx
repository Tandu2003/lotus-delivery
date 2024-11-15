import "./Home.scss";
import SlideShow from "../../components/SlideShow";
import { Link } from "react-router-dom";

const slideImages = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dflpparty/image/upload/v1731371038/LotusDelivery/home_bannerslider_1_picture_zd085p.webp",
    alt: "slider 1",
    link: "/pages/conservo",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dflpparty/image/upload/v1731371039/LotusDelivery/home_bannerslider_3_picture_oanxbu.webp",
    alt: "slider 2",
    link: "/pages/marukame-udon",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dflpparty/image/upload/v1731371041/LotusDelivery/home_bannerslider_4_picture_lg1py8.webp",
    alt: "slider 3",
    link: "/pages/coco-ichibanya",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dflpparty/image/upload/v1731371076/LotusDelivery/home_bannerslider_5_picture_bmhdjb.webp",
    alt: "slider 4",
    link: "/pages/yoshinoya",
  },
];

const Home = () => {
  const policies = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dflpparty/image/upload/v1731371113/LotusDelivery/home_policy_item_image_1_ual2ke.webp",
      title: "Đặt hàng",
      content: "Nhanh và dễ dàng",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dflpparty/image/upload/v1731371116/LotusDelivery/home_policy_item_image_2_wbzhh6.webp",
      title: "Từ hệ thống",
      content: "Các nhà hàng Chuẩn Nhật",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dflpparty/image/upload/v1731371119/LotusDelivery/home_policy_item_image_3_ai0tjx.webp",
      title: "Giao hàng",
      content: "An toàn & Đảm Bảo",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dflpparty/image/upload/v1731371121/LotusDelivery/home_policy_item_image_4_xbuiqp.webp",
      title: "Hàng ngàn",
      content: "Ưu đãi hấp dẫn nhất",
    },
  ];

  const vendors = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dflpparty/image/upload/v1731371084/LotusDelivery/home_vendor_item_image_1_rjsel5.webp",
      name: "coco-ichibanya",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dflpparty/image/upload/v1731371088/LotusDelivery/home_vendor_item_image_2_zdbela.webp",
      name: "conservo",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dflpparty/image/upload/v1731371092/LotusDelivery/home_vendor_item_image_3_ukoxig.webp",
      name: "marukame-udon",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dflpparty/image/upload/v1731371093/LotusDelivery/home_vendor_item_image_5_z2hwo2.webp",
      name: "yoshinoya",
    },
  ];

  return (
    <>
      <div className="home">
        <SlideShow slideImages={slideImages} />
        <div className="container">
          <div className="home-policy">
            {policies.map((policy, index) => (
              <div key={index} className="home-policy-item">
                <img src={policy.image} alt={policy.title} />
                <div className="policy-content">
                  <span>{policy.title}</span>
                  <b>{policy.content}</b>
                </div>
              </div>
            ))}
          </div>

          <div className="home-vendor">
            <div className="home-vendor-head">
              <h2>Thương hiệu nổi bật</h2>
            </div>
            <div className="home-vendor-body">
              {vendors.map((vendor, index) => (
                <Link to={`/pages/${vendor.name}`} key={index} className="home-vendor-item">
                  <img src={vendor.image} alt={vendor.name} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
