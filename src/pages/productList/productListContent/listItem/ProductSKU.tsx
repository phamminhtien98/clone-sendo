import { Key } from "react";
import { Link } from "react-router-dom";

interface Props {
  data: any;
}

const ProductSKU = ({ data }: Props) => {
  return (
    <div className="p-[0.8rem]">
      <Link to={""} className="text-[#0f1e29]">
        <div
          className="bg-white rounded-[8px] cursor-pointer overflow-hidden"
          style={{
            boxShadow:
              "0 2px 4px 0 rgba(0,0,0,.12), 0 -2px 2px 0 rgba(0,0,0,.04)",
          }}
        >
          {/* ảnh */}
          <div className="relative rounded-t-[8px] overflow-hidden">
            <div className="w-full h-max overflow-hidden relative pt-[100%]">
              <div className="h-full w-full top-0 bottom-0 left-0 right-0 absolute">
                <img
                  src={data.item.thumbnail_url}
                  alt="thumbnail"
                  className="h-full left-[50%] top-[50%] absolute translate-y-[-50%] translate-x-[-50%]"
                />
              </div>
            </div>
          </div>
          {/* thông tin */}
          <div className="pt-[1.6rem] px-[0.8rem] pb-[0.8rem] relative">
            {/* sự kiện */}
            {data.item.event_banners && (
              <div className="flex h-[1.6rem] overflow-hidden absolute w-full top-0 translate-x-[-0.8rem] translate-y-[-50%]">
                {data.item.event_banners.map(
                  (
                    item: { image: string | undefined },
                    index: Key | null | undefined
                  ) => (
                    <img key={index} src={item.image} alt="" />
                  )
                )}
              </div>
            )}
            {/* tên sản phẩm  */}
            <span className="text-[#0f1e29] mb-[0.4rem]">
              {data.item.shop_badge_urls && (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  className="h-[1.2rem] mr-[0.4rem] object-contain inline-block align-baseline"
                  src={data.item.shop_badge_urls[0].icon_url}
                />
              )}
              {data.item.name}
            </span>
            {/* giá */}
            <div>
              {data.item.app_discount_percentage && (
                <div>
                  <span className="text-[#b7bbbf] text-[11px] leading-[1.2rem] line-through">
                    {new Intl.NumberFormat("en-IN")
                      .format(data.item.price)
                      .replace(",", ".")}
                    đ
                  </span>
                  <span className="text-[#ee2624] text-[12px] leading-[1.6rem] ml-[0.4rem]">{`-${data.item.app_discount_percentage}%`}</span>
                </div>
              )}
              <div className="text-[#ee2624] text-[16px] leading-[2.2rem] font-[700] text-ellipsis overflow-hidden">
                {new Intl.NumberFormat("en-IN")
                  .format(data.item.final_price)
                  .replace(",", ".")}
                đ
              </div>
            </div>
            {/* Ưu đãi */}
            <div className="h-[2rem] pb-[0.3rem] pt-[0.1rem] flex bg-[#f2f3f4] px-[0.4rem] py-[0.2rem] rounded-[12px] w-max items-center">
              <img
                className="w-[1.2rem] h-[1.2rem]"
                src={data.item.promotion_sub_message.icon}
                alt=""
              />
              <span className="text-[#3f4b53] text-[11px] text-ellipsis overflow-hidden ml-[0.4rem]">
                {data.item.promotion_sub_message.text}
              </span>
            </div>
            {/* Mở bán */}
            {data.item.quantity && data.item.remaining && (
              <div className="h-[1.6rem] mt-[0.4rem]">
                <div className="h-[1.4rem] rounded-[8px] bg-[#f47c7b] w-[100%] relative overflow-hidden">
                  <div
                    className="absolute h-[1.4rem] top-0 left-0 z-0 rounded-[8px] bg-[#d52220]"
                    style={{
                      width: `${
                        ((data.item.quantity - data.item.remaining) * 100) /
                        data.item.quantity
                      }%`,
                    }}
                  ></div>
                  <span className="absolute z-[1] left-[50%] translate-x-[-50%] text-white text-[11px] text-center">
                    {data.item.quantity === data.item.remaining
                      ? "Mở bán"
                      : `Đã bán ${data.item.quantity - data.item.remaining}`}
                  </span>
                </div>
              </div>
            )}
            <div className="float-right mb-[0.8rem]">
              <span className="text-[#0f1e29] leading-[1.2rem] text-[11px]">
                {data.item.shop_warehouse_city}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductSKU;
