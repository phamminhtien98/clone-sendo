import { Link, useLocation, useSearchParams } from "react-router-dom";
import st from "./Header.module.scss";
import logoSendo from "../../assets/svg/logo.svg";
import iconMenu from "../../assets/svg/iconMenu.svg";
import downArrow from "../../assets/svg/downArrow.svg";
import iconSearch from "../../assets/svg/iconSearch.svg";
import iconBag from "../../assets/svg/iconBag.svg";
import iconCheck from "../../assets/svg/iconCheck.svg";
import { useState, useEffect, useRef } from "react";
import { categories as getCategories } from "../../data/Categories";
import { Categories } from "../../@Types/Types";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useSearchParams();
  const paramConfig = Object.fromEntries([...search]);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [searchInput, setSearchInput] = useState<string>("");
  const [selectSearch, setSelectSearch] = useState("sen-do");
  const [categoryName, setcategoryName] = useState("Sendo");
  const divSelectSearchRef = useRef<HTMLDivElement>(null);

  const categories = getCategories;
  const findCategoryName = (categories: Categories[], key: string) => {
    let categoryName = "Sendo";
    let found = false;

    const searchCategories = (categories: Categories[]) => {
      categories.forEach((item) => {
        if (found) {
          return;
        }
        if (item.cate_path === key) {
          categoryName = item.name;
          found = true;
        } else if (item.sub_category) {
          searchCategories(item.sub_category);
        }
      });
    };

    searchCategories(categories);

    return categoryName;
  };

  useEffect(() => {
    setcategoryName(findCategoryName(categories, path));
    setSelectSearch(path);
  }, [location]);

  const handleSelect = (value: string) => {
    setSelectSearch(value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        divSelectSearchRef.current &&
        !divSelectSearchRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search.set("q", searchInput);
    setSearch(search, { replace: true });
  };
  useEffect(() => {
    const paramSearch = paramConfig.q;
    if (paramSearch) {
      setSearchInput(paramSearch);
    }
  }, []);

  return (
    <nav className="bg-red2">
      <div className="container">
        <div className="flex items-center">
          {/* logo sendo */}
          <div className={`cursor-pointer ${st.logo}`}>
            <Link to={""}>
              <img
                src={logoSendo}
                alt="Logo Sendo"
                className="cursor-pointer w-[87px] h-[48px] max-w-[unset]"
              />
            </Link>
          </div>
          {/* search */}
          <div className={`flex items-center flex-grow h-[6.4rem]`}>
            {/* search/icon menu */}
            <div className={`pl-[0.8rem] pr-[1.6rem]`}>
              <img
                src={iconMenu}
                alt="icon menu"
                className="cursor-pointer w-[24px] h-[24px] max-w-[unset]"
              />
            </div>
            {/* search/form search */}
            <form
              className={`w-[100%] flex items-center`}
              onSubmit={handleOnSubmit}
            >
              <div
                className={`flex bg-white rounded-[4px] w-[100%] justify-between`}
              >
                <div className="w-[100%]">
                  <input
                    className="rounded-[4px] px-[1.6rem] py-[0.8rem] w-[100%] leading-[2.2rem]"
                    type="text"
                    placeholder="Tìm trên Sendo"
                    value={searchInput}
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                  />
                </div>
                <div
                  className="flex justify-center items-center cursor-pointer bg-[#f2f3f4] relative rounded-r-[4px]"
                  onClick={() => setShow(!show)}
                  ref={divSelectSearchRef}
                >
                  <div>
                    <div>
                      <input
                        type="text"
                        disabled
                        value={
                          selectSearch === "sen-do" ? "Sendo" : categoryName
                        }
                        autoComplete="off"
                        className="bg-[#f2f3f4] px-[1.6rem] py-[0.8rem] font-bold cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="pl-[1.2rem] pr-[1.2rem]">
                    <img
                      src={downArrow}
                      alt=""
                      className="w-[24px] h-[24px] max-w-[unset]"
                    />
                  </div>
                  {show && (
                    <ul className="p-[0.8rem] shadow bg-white rounded-[4px] top-[120%] absolute min-w-[20rem] left-0 z-[2]">
                      <li
                        className="flex justify-between items-center p-[0.8rem] rounded-[4px] hover:bg-[#f2f3f4]"
                        onClick={() => {
                          handleSelect("sen-do");
                        }}
                      >
                        <span
                          className={`${
                            selectSearch === "sen-do" ? "font-[700]" : ""
                          } whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer`}
                        >
                          Tìm trên Sendo
                        </span>
                        {selectSearch === "sen-do" && (
                          <img
                            src={iconCheck}
                            alt=""
                            className="w-[24px] h-[24px] max-w-[unset] ml-3"
                          />
                        )}
                      </li>
                      <li
                        className="flex justify-between items-center p-[0.8rem] rounded-[4px] hover:bg-[#f2f3f4]"
                        onClick={() => {
                          handleSelect(path);
                        }}
                      >
                        <span
                          className={`${
                            selectSearch === path ? "font-[700]" : ""
                          } whitespace-nowrap overflow-hidden text-ellipsis flex-1 cursor-pointer`}
                        >
                          {`Tìm trong ${categoryName}`}
                        </span>
                        {selectSearch === path && (
                          <img
                            src={iconCheck}
                            alt=""
                            className="w-[24px] h-[24px] max-w-[unset] ml-3"
                          />
                        )}
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <button
                className={`bg-white p-[0.7rem] rounded-[4px] ml-[0.4rem]`}
                type="submit"
              >
                <img
                  src={iconSearch}
                  alt="icon search"
                  className="w-[24px] h-[24px] max-w-[unset]"
                />
              </button>
            </form>
          </div>
          {/* login */}
          <div className={`flex items-center justify-center min-w-[17.5rem]`}>
            <div className={`px-[2.4rem]`}>
              <img src={iconBag} alt="icon bang" />
            </div>
            <Link
              to={""}
              className={`px-[1.6rem] py-[0.6rem] rounded-[4px] bg-white font-[700] text-[#3f4b53]`}
            >
              <button>Đăng nhập</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
