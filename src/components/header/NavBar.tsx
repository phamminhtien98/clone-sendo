import { Link } from "react-router-dom";
import st from "./Header.module.scss";
import logoSendo from "../../assets/svg/logo.svg";
import iconMenu from "../../assets/svg/iconMenu.svg";
import downArrow from "../../assets/svg/downArrow.svg";
import iconSearch from "../../assets/svg/iconSearch.svg";
import iconBag from "../../assets/svg/iconBag.svg";
const NavBar = () => {
  return (
    <nav className="bg-red2">
      <div className="container">
        <div className="flex items-center">
          {/* logo sendo */}
          <div className={`cursor-pointer ${st.logo}`}>
            <Link to={""}>
              <img
                src={logoSendo}
                alt="Logo Sendo"
                className="cursor-pointer w-[87px] h-[48px] max-w-[unset]"
              />
            </Link>
          </div>
          {/* search */}
          <div className={`flex items-center flex-grow h-[6.4rem]`}>
            {/* search/icon menu */}
            <div className={`pl-[0.8rem] pr-[1.6rem]`}>
              <img
                src={iconMenu}
                alt="icon menu"
                className="cursor-pointer w-[24px] h-[24px] max-w-[unset]"
              />
            </div>
            {/* search/form search */}
            <form className={`w-[100%] flex items-center`}>
              <div
                className={`flex bg-white rounded-[4px] w-[100%] justify-between overflow-hidden`}
              >
                <div className="w-[100%]">
                  <input
                    className="rounded-[4px] px-[1.6rem] py-[0.8rem] w-[100%] leading-[2.2rem]"
                    type="text"
                    placeholder="Tìm trên Sendo"
                  />
                </div>
                <div className="flex justify-center items-center cursor-pointer bg-[#f2f3f4]">
                  <div>
                    <div>
                      <input
                        type="text"
                        readOnly
                        value={"Sendo"}
                        className="bg-[#f2f3f4] px-[1.6rem] py-[0.8rem] font-bold"
                      />
                    </div>
                  </div>
                  <div className="pl-[1.2rem] pr-[1.2rem]">
                    <img
                      src={downArrow}
                      alt=""
                      className="w-[24px] h-[24px] max-w-[unset]"
                    />
                  </div>
                </div>
              </div>
              <button
                className={`bg-white p-[0.7rem] rounded-[4px] ml-[0.4rem]`}
              >
                <img
                  src={iconSearch}
                  alt="icon search"
                  className="w-[24px] h-[24px] max-w-[unset]"
                />
              </button>
            </form>
          </div>
          {/* login */}
          <div className={`flex items-center justify-center min-w-[17.5rem]`}>
            <div className={`px-[2.4rem]`}>
              <img src={iconBag} alt="icon bang" />
            </div>
            <Link
              to={""}
              className={`px-[1.6rem] py-[0.6rem] rounded-[4px] bg-white font-[700] text-[#3f4b53]`}
            >
              <button>Đăng nhập</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
