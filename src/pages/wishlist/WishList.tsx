import BasicBox from "../../components/style/BasicBox";
import FilteredList from "../../components/common/FilteredList";
import { useAppSelector } from "../../store/hook";

const WishList = () => {
  const wishList = useAppSelector((state) => state.wish);

  return (
    <BasicBox
      boxTitle={"Wish List"}
      boxContent={<FilteredList type="wish" list={wishList} />}
    />
  );
};

export default WishList;
