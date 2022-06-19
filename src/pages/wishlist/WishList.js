import { useSelector } from "react-redux";

import BasicBox from "../../components/style/BasicBox";
import FilteredList from "../../components/common/FilteredList";

const WishList = () => {
  const wishList = useSelector((state) => state.wish);

  return (
    <BasicBox
      boxTitle={"Wish List"}
      boxContent={<FilteredList type="wish" list={wishList} />}
    />
  );
};

export default WishList;
