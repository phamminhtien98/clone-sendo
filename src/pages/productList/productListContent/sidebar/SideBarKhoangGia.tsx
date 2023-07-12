import { useEffect, useState } from "react";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import iconAdd from "../../../../assets/svg/iconAdd.svg";
import iconSub from "../../../../assets/svg/iconSub.svg";
import { IDataFilter } from "../../../../@Types/Types";
interface Props {
  dataFilter: IDataFilter[];
  attribute_key: string;
}
const SideBarKhoangGia = ({ dataFilter, attribute_key }: Props) => {
  const [showMore, setShowMore] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  const [btnLook, setBtnLook] = useState(false);
  const [giaThap, setGiaThap] = useState<number>();
  const [giaCao, setGiaCao] = useState<number>();
  const data = dataFilter.filter(
    (item) => item.attribute_key === attribute_key
  );

  useEffect(() => {
    if (giaThap && giaCao && giaThap < giaCao) {
      setBtnLook(true);
    } else if ((giaThap && !giaCao) || (!giaThap && giaCao)) {
      setBtnLook(true);
    } else {
      setBtnLook(false);
    }
  }, [giaThap, giaCao]);

  return (
    <div className="py-[1.2rem] px-[0.4rem]">
      <div className="flex justify-between items-center">
        <span className="text-[#0f1e29] font-[700] ml-[1.2rem] text-[14px] leading-[1.8rem]">
          {data[0]?.attribute_name}
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
      {data[0].attribute_value && showMore && (
        <div className={`flex flex-col overflow-hidden mt-3 px-[1.2rem]`}>
          <div className="flex flex-col w-full text-[#6f787e] py-[0.8rem]">
            <div className="flex">
              <div className="flex flex-col">
                <span className="mb-[0.8rem]">Thấp nhất</span>
                <input
                  className="w-full p-[0.8rem] leading-[1.4rem] border-[#cfd2d4] border-[1px] rounded-[4px] hover:border-[#007aff] "
                  type="number"
                  onChange={(e) => {
                    setGiaThap(Number(e.target.value));
                  }}
                />
              </div>
              <div className="mt-auto mb-[8px] mx-[0.4rem]">
                <span>-</span>
              </div>
              <div className="flex flex-col">
                <span className="mb-[0.8rem]">Cao nhất</span>
                <input
                  className="w-full p-[0.8rem] leading-[1.4rem] border-[#cfd2d4] border-[1px] rounded-[4px] hover:border-[#007aff] "
                  type="number"
                  onChange={(e) => {
                    setGiaCao(Number(e.target.value));
                  }}
                />
              </div>
            </div>
            <button
              className={`font-[700] py-[0.4rem] mt-[0.8rem] rounded-[4px] text-[12px] transition-all duration-300 ease-linear ${
                btnLook
                  ? "cursor-pointer bg-[#ee2624] text-white hover:bg-[#f1514f]"
                  : "cursor-not-allowed bg-[#f2f3f4] text-[#b7bbbf]"
              }`}
            >
              Áp dụng
            </button>
          </div>
          {data[0].attribute_value.map((item, index) =>
            index <= 3 ? (
              <span
                key={index}
                className="flex h-[3.2rem] p-[0.8rem] rounded-[4px] bg-[#f2f3f4] mb-[0.8rem] cursor-pointer hover:font-[700] hover:bg-[#e7e8ea]"
              >
                {item.gtprice === -1
                  ? `Dưới ${item.ltprice / 1000}K`
                  : item.ltprice === -1
                  ? `Trên ${item.gtprice / 1000}K`
                  : `${item.gtprice / 1000}K - ${item.ltprice / 1000}K`}
              </span>
            ) : (
              btnShow && (
                <span
                  key={index}
                  className="flex h-[3.2rem] p-[0.8rem] rounded-[4px] bg-[#f2f3f4] mb-[0.8rem] cursor-pointer hover:font-[700] hover:bg-[#e7e8ea]"
                >
                  {item.gtprice === -1
                    ? `Dưới ${item.ltprice / 1000}K`
                    : item.ltprice === -1
                    ? `Trên ${item.gtprice / 1000}K`
                    : `${item.gtprice / 1000}K - ${item.ltprice / 1000}K`}
                </span>
              )
            )
          )}
          {data[0].attribute_value.length > 4 && (
            <div
              className="flex justify-center"
              onClick={() => {
                setBtnShow(!btnShow);
              }}
            >
              {btnShow ? (
                <button className="px-[0.7rem] py-[0.6rem] cursor-pointer mt-[0.8rem] text-[#3f4b53] rounded-[4px] flex">
                  <img src={iconSub} alt="" className="max-w-[16px] h-[16px]" />
                  <span className="ml-[0.8rem] text-[14px] leading-[1.29] font-[700]">
                    Thu gọn
                  </span>
                </button>
              ) : (
                <button className="px-[0.7rem] py-[0.6rem] cursor-pointer mt-[0.8rem] text-[#3f4b53] rounded-[4px] flex">
                  <img src={iconAdd} alt="" className="max-w-[16px] h-[16px]" />
                  <span className="ml-[0.8rem] text-[14px] leading-[1.29] font-[700]">
                    Xem thêm
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SideBarKhoangGia;
