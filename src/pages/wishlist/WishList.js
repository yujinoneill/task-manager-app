import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BasicBox from "../../components/BasicBox";
import FilteredList from "../../components/FilteredList";
import { wishActions } from "../../store/wishList";

const WishList = () => {
  const wishList = useSelector((state) => state.wish);
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("data");

    if (localData) {
      const localWishList = JSON.parse(localData).wish;
      dispatch(wishActions.wishInit(localWishList));
    }
  }, []);

  return (
    <BasicBox
      boxTitle={"Wish List"}
      boxContent={<FilteredList type="wish" list={wishList} />}
    />
  );
};

export default WishList;
