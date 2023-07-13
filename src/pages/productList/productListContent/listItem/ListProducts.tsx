import ProductFlashSale from "./ProductFlashSale";
import ProductSKU from "./ProductSKU";

interface Props {
  dataProductList: any[];
}
const ListProducts = ({ dataProductList }: Props) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {dataProductList.map((item, index) =>
        item.type === "SKU" ? (
          <ProductSKU key={index} data={item} />
        ) : item.type === "FlashSale" || item.type === "DailySale" ? (
          <ProductFlashSale key={index} data={item} />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default ListProducts;
