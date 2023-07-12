import { useState } from "react";
import iconDownArrow from "../../../../assets/svg/downArrow.svg";
import { IDataFilter } from "../../../../@Types/Types";
interface Props {
  dataFilter: IDataFilter[];
  attribute_key: string;
}
const SidebarMauSac = ({ dataFilter, attribute_key }: Props) => {
  const [showMore, setShowMore] = useState(true);
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
        <div className={`flex flex-col overflow-hidden mt-3 px-[1.2rem]`}>
          {data[0].attribute_value.map((item, index) => (
            <span
              key={index}
              className="flex h-[3.2rem] p-[0.8rem] rounded-[4px] bg-[#f2f3f4] mb-[0.8rem] cursor-pointer hover:font-[700] hover:bg-[#e7e8ea]"
            >
              {item.option_name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarMauSac;
