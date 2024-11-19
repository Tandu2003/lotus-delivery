import "./Home.scss";
import SlideShow from "../../components/SlideShow";
import { Link } from "react-router-dom";
import ProductItem from "../../components/Product-item";

import { slideImages, policies, products } from "../../assets/data/home";

const Home = () => {
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
              {[
                ...new Map(products.map((product) => [product?.vendor.name, product])).values(),
              ].map((uniqueProduct, index) => (
                <Link
                  to={`/pages/${uniqueProduct?.vendor.name}`}
                  key={index}
                  className="home-vendor-item"
                >
                  <img src={uniqueProduct?.vendor.image} alt={uniqueProduct?.vendor.name} />
                </Link>
              ))}
            </div>
          </div>

          <div className="home-hot-deal">
            <div className="home-hot-deal-head">
              <h2>Hot deal</h2>
              <Link to="/collections/hot-deal">Tất cả</Link>
            </div>
            <div className="home-hot-deal-body">
              {products.map((product, index) => (
                <ProductItem key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
