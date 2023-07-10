import { Link } from "react-router-dom";
const HeaderTop = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between">
          <div className={`flex`}>
            <Link to={""} className={`px-[0.4rem] flex`}>
              <span>Tải ứng dụng</span>
            </Link>
            <Link to={""} className="ml-[1.2rem]">
              <span>Chăm sóc khách hàng</span>
            </Link>
            <Link to={""} className="ml-[1.2rem]">
              <span>Kiểm tra đơn hàng</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
