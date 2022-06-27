import { useEffect } from "react";

import BasicBox from "../../components/style/BasicBox";
import FilteredList from "../../components/common/FilteredList";
import { useAppSelector } from "../../store/hook";

const WishList = () => {
  const wishList = useAppSelector((state) => state.wish);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = "My Little Task Manager - Wish List";
  }, []);

  return (
    <BasicBox
      boxTitle={"Wish List"}
      boxContent={<FilteredList type="wish" list={wishList} />}
    />
  );
};

export default WishList;
