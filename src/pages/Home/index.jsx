import "./Home.scss";
import SlideShow from "../../components/SlideShow";

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
  return (
    <>
      <div className="home">
        <SlideShow slideImages={slideImages} />
        <div className="container"></div>
      </div>
    </>
  );
};

export default Home;
