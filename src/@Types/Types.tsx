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

export interface IDataFilter {
  attribute_term?: string;
  attribute_name?: string;
  attribute_key?: string;
  attribute_icon?: string;
  attribute_label?: string;
  attribute_value?: any[];
  attribute_background_color?: string;
  attribute_background_image?: string;
}
