import "./Product-item.scss";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  function toSlug(text) {
    return text
      .toLowerCase() // Chuyển tất cả thành chữ thường
      .normalize("NFD") // Chuẩn hóa chuỗi (để tách dấu)
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu tiếng Việt
      .replace(/[^a-z0-9\s-]/g, "") // Loại bỏ ký tự đặc biệt (chỉ giữ chữ cái, số, khoảng trắng, và gạch ngang)
      .trim() // Loại bỏ khoảng trắng ở đầu và cuối
      .replace(/\s+/g, "-"); // Thay khoảng trắng bằng gạch ngang
  }

  return (
    <>
      <div className="product-item">
        <Link to={`/products/${toSlug(product.name)}`} className="product-item-image">
          <img src={product.image} alt={product.name} />
        </Link>
        <div className="product-item-vendor">
          <img src={product.vendor.image} alt={product.vendor.name} />
        </div>
        <h3 className="product-item-title">
          <Link to={`/products/${toSlug(product.name)}`}>{product.name}</Link>
        </h3>
        <div className="product-item-action">
          <span className="product-item-price">{product.price.toLocaleString()}₫</span>
          <div className="product-item-quantity">
            <Link to={`/products/${toSlug(product.name)}`}>
              <span>+</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
