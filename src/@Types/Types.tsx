export interface Categories {
  id: number;
  image: string;
  level: number;
  name: string;
  parent_id: number;
  path: string;
  redirect_link: string;
  url_path: string;
  cate_path: string;
  sub_category?: Categories[];
}
