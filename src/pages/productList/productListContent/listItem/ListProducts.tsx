import ProductSKU from "./ProductSKU";

interface Props {
  dataProductList: any[];
}
const ListProducts = ({ dataProductList }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {dataProductList.map((item, index) =>
        item.type === "SKU" ? <ProductSKU data={item} /> : ""
      )}
    </div>
  );
};

export default ListProducts;
