import { useState } from "react";
import downArrow from "../../../../assets/svg/downArrow.svg";
import iconCheck from "../../../../assets/svg/iconCheck.svg";
const sortTypes = [
  {
    sortType: "vasup_desc",
    name: "Đề cử",
  },
  {
    sortType: "norder_30_desc",
    name: "Bán chạy",
  },
  {
    sortType: "real_discount_desc",
    name: "Khuyến mãi",
  },
  {
    sortType: "rating_percent_desc",
    name: "Đánh giá tốt",
  },
];

const SortProduct = () => {
  const [sortType, setSortType] = useState<{ sortType: string; name: string }>({
    sortType: "vasup_desc",
    name: "Đề cử",
  });
  const [show, setShow] = useState(true);
  return (
    <div
      className="flex cursor-pointer items-center"
      onClick={() => setShow(!show)}
    >
      <span className="mr-[0.8rem]">Sắp xếp theo:</span>
      <div className="w-full lg:w-[17%]">
        <div className=" relative bg-white border-[1px] border-[#cfd2d4] hover:border-[#3f81fe] min-h-[3.2rem] rounded-[4px] flex justify-between items-center py-[0.8rem] pl-[0.8rem]">
          <span className="text-[#6f787e]">{sortType.name}</span>
          <div className="px-[0.8rem]">
            <img
              src={downArrow}
              alt=""
              className="w-[16px] h-[16px] max-w-[unset]"
            />
          </div>
          {show && (
            <ul className="lg:w-[179px] p-[0.8rem] shadow bg-white rounded-[4px] absolute w-full top-[120%] left-0">
              {sortTypes.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-between items-center p-[0.8rem] rounded-[4px] hover:bg-[#f2f3f4]"
                    onClick={() => {
                      setSortType(item);
                    }}
                  >
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer">
                      {item.name}
                    </span>
                    {sortType.name === item.name && (
                      <img
                        src={iconCheck}
                        alt=""
                        className="w-[24px] h-[24px] max-w-[unset]"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortProduct;
