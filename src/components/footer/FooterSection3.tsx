import { Link } from "react-router-dom";
import dadangky from "../../assets/imagesFooter/dadangky.png";
import noikhongvoihanggia from "../../assets/imagesFooter/noikhongvoihanggia.png";

const FooterSection3 = () => {
  return (
    <section className="bg-[#27343e] py-[2.4rem] text-white">
      <div className="containerct">
        <div className="flex justify-between">
          <div className="max-w-[42%] flex flex-col">
            <span className="mb-[1.2rem] font-[700] text-[12px] leading-[1.6rem]">
              Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn FPT
            </span>
            <span className="mb-[1.6rem] font-[400] text-[12px] leading-[1.6rem]">
              Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần thứ
              20, ngày 26/04/2022.
            </span>
            <span className="mb-[1.6rem] font-[400] text-[12px] leading-[1.6rem]">
              Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
            </span>
            <span className="mb-[1.6rem] font-[400] text-[12px] leading-[1.6rem]">
              Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01, Đường
              Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận Đông, Quận 7,
              Thành phố Hồ Chí Minh, Việt Nam.
            </span>
            <span className="font-[400] text-[12px] leading-[1.6rem]">
              Email:<Link to="mailto:lienhe@sendo.vn"> lienhe@sendo.vn</Link>
            </span>
            <div className="mt-[1.2rem] flex">
              <Link to={""}>
                <img src={dadangky} alt="" className="h-[3.3rem] mr-[2rem]" />
              </Link>
              <Link to={""}>
                <img src={noikhongvoihanggia} alt="" className="h-[3.3rem]" />
              </Link>
            </div>
          </div>
          <div className="max-w-[50%] flex flex-col basis-[50%]">
            <span className="mb-[1.2rem] font-[700] text-[12px] leading-[1.6rem]">
              Đăng ký nhận bản tin ưu đãi khủng từ Sendo
            </span>
            <form className="flex items-center">
              <div className="max-w-[50%] basis-[50%]">
                <input
                  type="text"
                  placeholder="Email của bạn là"
                  className="p-[0.8rem] leading-[1.4rem] rounded-[4px] w-[100%]"
                />
              </div>
              <div className="max-w-[17%] basis-[17%]">
                <button className="font-[700] px-[1.6rem] py-[0.8rem] ml-[0.4rem] bg-[#ee2624] hover:bg-[#f1514f] cursor-pointer rounded-[4px]">
                  <span className="text-[14px] leading-[1.29rem]">Đăng ký</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection3;
