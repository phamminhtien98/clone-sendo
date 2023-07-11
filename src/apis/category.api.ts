import { Categories } from "../@Types/Types";
import http from "../utils/http";

export const getCategories = () => http.get<Categories>("sach-van-phong-pham");
