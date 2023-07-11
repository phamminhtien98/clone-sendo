import { Categories } from "../../../../@Types/Types";
import SitebarTop from "./SitebarTop";

interface Props {
  categories: Categories;
}

const SiteBar = ({ categories }: Props) => {
  return (
    <div>
      <SitebarTop />
    </div>
  );
};

export default SiteBar;
