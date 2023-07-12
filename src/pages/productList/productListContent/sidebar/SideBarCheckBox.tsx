import { useState } from "react";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import iconAdd from "../../../../assets/svg/iconAdd.svg";
import iconSub from "../../../../assets/svg/iconSub.svg";
import { IDataFilter } from "../../../../@Types/Types";
interface Props {
  dataFilter: IDataFilter[];
  attribute_key: string;
}
const SideBarCheckBox = ({ dataFilter, attribute_key }: Props) => {
  const [showMore, setShowMore] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  const data = dataFilter.filter(
    (item) => item.attribute_key === attribute_key
  );

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
        <div className={`flex flex-col overflow-hidden mt-3`}>
          {data[0].attribute_value.map((item, index) =>
            index <= 3 ? (
              <div
                className="flex items-center rounded-[4px] pl-[1.5rem] py-[0.8rem] pr-[0.8rem] hover:bg-[#f2f3f4] hover:font-[700] cursor-pointer"
                key={index}
              >
                <input
                  className="w-[18px] h-[18px] cursor-pointer"
                  type="checkbox"
                  name=""
                  id={data[0].attribute_key + item.option_id}
                  value={item.option_name}
                />
                <label
                  className="ml-[0.8rem] text-[#3f4b53] whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer"
                  htmlFor={data[0].attribute_key + item.option_id}
                >
                  {item.option_name}
                </label>
              </div>
            ) : (
              btnShow && (
                <div
                  className="flex items-center rounded-[4px] pl-[1.5rem] py-[0.8rem] pr-[0.8rem] hover:bg-[#f2f3f4] hover:font-[700] cursor-pointer"
                  key={index}
                >
                  <input
                    className="w-[18px] h-[18px]"
                    type="checkbox"
                    name=""
                    id={data[0].attribute_key + item.option_id}
                    value={item.option_name}
                  />
                  <label
                    className="ml-[0.8rem] text-[#3f4b53] whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer"
                    htmlFor={data[0].attribute_key + item.option_id}
                  >
                    {item.option_name}
                  </label>
                </div>
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

export default SideBarCheckBox;
