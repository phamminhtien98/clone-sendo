import { useState, useEffect } from "react";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import iconAdd from "../../../../assets/svg/iconAdd.svg";
import iconSub from "../../../../assets/svg/iconSub.svg";
import { IDataFilter } from "../../../../@Types/Types";
import { useSearchParams } from "react-router-dom";
interface Props {
  dataFilter: IDataFilter[];
  attribute_key: string;
}
const SideBarCheckBoxEP = ({ dataFilter, attribute_key }: Props) => {
  const [search, setSearch] = useSearchParams();
  const [showMore, setShowMore] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  const paramConfig = Object.fromEntries([...search]);
  const data = dataFilter.filter(
    (item) => item.attribute_key === attribute_key
  );

  const handleCheckBox = (
    _e: React.ChangeEvent<HTMLInputElement>,
    _item: { option_name: string; search_key: string; value: string }
  ) => {
    console.log(paramConfig);

    if (!_e.target.checked) {
      search.delete(_item.search_key);
      setSearch(search, {
        replace: true,
      });
    } else {
      search.set(_item.search_key, _item.value);
      setSearch(search, {
        replace: true,
      });
    }
  };

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
                  id={item.search_key}
                  value={item.value}
                  onChange={(e) => {
                    handleCheckBox(e, item);
                  }}
                  checked={paramConfig[item.search_key] ? true : false}
                />
                <label
                  className={`${
                    paramConfig[item.search_key] ? "font-[700]" : ""
                  } ml-[0.8rem] text-[#3f4b53] whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer`}
                  htmlFor={item.search_key}
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
                    id={item.search_key}
                    checked={paramConfig[item.search_key] ? true : false}
                    value={item.value}
                    onChange={(e) => {
                      handleCheckBox(e, item);
                    }}
                  />
                  <label
                    className={`${
                      paramConfig[item.search_key] ? "font-[700]" : ""
                    } ml-[0.8rem] text-[#3f4b53] whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer`}
                    htmlFor={item.search_key}
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

export default SideBarCheckBoxEP;
