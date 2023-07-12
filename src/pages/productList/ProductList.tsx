import { Categories } from "../../@Types/Types";
import { categories as getCategories } from "../../data/Categories";
import { dataFilter as getDataFilter } from "../../data/Filter";
import Breadcrumb from "./breadcrumb/Breadcrumb";
import SideBar from "./productListContent/sidebar/SideBar";

const ProductList = () => {
  const categories = getCategories;
  const dataFilter = getDataFilter;
  const handleSelectCategory = (category: Categories) => {
    console.log(category);
  };
  return (
    <main>
      <div className="bg-[#f2f3f4] min-h-[100vh] pb-[2.4rem] w-full">
        <div className="px-[1.6rem] container">
          {/* top */}
          <div className="py-[1.6rem]">
            <Breadcrumb />
            <div className="text-[#0f1e29]">
              <span className="font-[700] text-[20px] leading-[2.2rem]">
                Sách & Văn phòng phẩm
              </span>
              <span className="ml-[0.8rem] font-[400] text-[14px] leading-[1.8rem]">
                Thấy hơn 10.000 sản phẩm
              </span>
            </div>
          </div>
          {/* body */}
          <div>
            <div
              id="sidebar"
              className="bg-white rounded-[8px] mr-[2.4px] max-h-[90vh] min-h-[80vh] overflow-x-hidden overflow-y-auto w-[20.6rem]"
            >
              <SideBar
                categories={categories}
                handleSelectCategory={handleSelectCategory}
                dataFilter={dataFilter}
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
