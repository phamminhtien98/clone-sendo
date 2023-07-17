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
const SideBarCheckBox = ({ dataFilter, attribute_key }: Props) => {
  const [search, setSearch] = useSearchParams();
  const [showMore, setShowMore] = useState(true);
  const [btnShow, setBtnShow] = useState(false);
  const paramConfig = Object.fromEntries([...search]);
  const data = dataFilter.filter(
    (item) => item.attribute_key === attribute_key
  );

  const isInputChecked = (attribute_key: string, value: number | string) => {
    const param = paramConfig[attribute_key];
    const paramList = param ? param.split(",") : [];
    return paramList.includes(`${value}`);
  };

  const handleCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    attribute_key: string,
    value: number
  ) => {
    let param: string | undefined = paramConfig[attribute_key];
    //chuyển param string thành mảng
    let paramList = param ? param.split(",") : [];
    if (e.target.checked) {
      //add thêm value cho param
      paramList.push(`${value}`);
      search.set(attribute_key, paramList.join(","));
    } else {
      //xóa value khỏi param
      paramList = paramList.filter((item) => item !== `${value}`);
      if (paramList.length === 0) {
        //nếu mảng param ko còn phần tử xóa khỏi url
        search.delete(attribute_key);
      } else {
        //nếu mảng param còn phần tử sửa lại param trên url
        search.set(attribute_key, paramList.join(","));
      }
    }
    setSearch(search, { replace: true });
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
          {data[0].attribute_value.map((item, index) => {
            if (index > 3 && !btnShow) return null;

            return (
              <div
                className="flex items-center rounded-[4px] pl-[1.5rem] hover:bg-[#f2f3f4] hover:font-[700] cursor-pointer"
                key={index}
              >
                <input
                  className="w-[18px] h-[18px] cursor-pointer"
                  type="checkbox"
                  name=""
                  id={data[0].attribute_key + item.option_id}
                  value={item.option_id}
                  onChange={(e) => {
                    handleCheckBox(
                      e,
                      data[0].attribute_key ?? "",
                      item.option_id
                    );
                  }}
                  checked={isInputChecked(
                    data[0].attribute_key ?? "",
                    item.option_id
                  )}
                />
                <label
                  className={`${
                    isInputChecked(data[0].attribute_key ?? "", item.option_id)
                      ? "font-[700]"
                      : ""
                  } ml-[0.8rem] text-[#3f4b53] whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer w-full py-[0.8rem] pr-[0.8rem]`}
                  htmlFor={data[0].attribute_key + item.option_id}
                >
                  {item.option_name}
                </label>
              </div>
            );
          })}

          {data[0].attribute_value.length > 4 && (
            <div
              className="flex justify-center"
              onClick={() => {
                setBtnShow(!btnShow);
              }}
            >
              <button className="px-[0.7rem] py-[0.6rem] cursor-pointer mt-[0.8rem] text-[#3f4b53] rounded-[4px] flex">
                <img
                  src={btnShow ? iconSub : iconAdd}
                  alt=""
                  className="max-w-[16px] h-[16px]"
                />
                <span className="ml-[0.8rem] text-[14px] leading-[1.29] font-[700]">
                  {btnShow ? "Thu gọn" : "Xem thêm"}
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SideBarCheckBox;
