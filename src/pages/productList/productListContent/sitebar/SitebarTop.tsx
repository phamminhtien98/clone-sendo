import { Link } from "react-router-dom";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import { useState } from "react";
const SitebarTop = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreSubMenu, setShowMoreSubMenu] = useState(false);
  return (
    <div className="py-[1.2rem] px-[0.4rem]">
      <div className="flex justify-between items-center">
        <span className="text-[#0f1e29] font-[700] ml-[1.2rem] text-[14px] leading-[1.8rem]">
          Danh mục
        </span>
        <button
          className="p-[0.7rem] hover:bg-[#f2f3f4] rounded-[4px]"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          <img
            src={iconDownArrow}
            alt=""
            className={`w-[16px] h-[16px] ${showMore ? "" : "rotate-180"}`}
          />
        </button>
      </div>

      <div className={`flex flex-col ${showMore ? "hidden" : ""}`}>
        <Link
          to={""}
          className="px-[1.2rem] py-[0.8rem] text-[14px] font-[400] leading-[1.8rem] text-[#0f62fe] "
        >
          Về trang tất cả danh mục
        </Link>
        <div>
          <div className="px-[0.8rem] py-[0.4rem] flex items-center hover:bg-[#f2f3f4] rounded-[4px] cursor-pointer">
            <button
              className="p-[0.5rem] rounded-[4px]"
              onClick={() => {
                setShowMoreSubMenu(!showMoreSubMenu);
              }}
            >
              <img
                src={iconDownArrow}
                alt=""
                className={`w-[12px] h-[12px] ${
                  showMoreSubMenu ? "" : "rotate-180"
                }`}
              />
            </button>
            <span className="text-[14px] font-[700] ml-[0.4rem] overflow-hidden whitespace-nowrap">
              Sách & Văn phòng phẩm
            </span>
          </div>
          {showMoreSubMenu && <div></div>}
        </div>
      </div>
    </div>
  );
};

export default SitebarTop;
