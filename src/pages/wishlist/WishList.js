import { useSelector } from "react-redux";

import BasicBox from "../../components/BasicBox";
import FilteredList from "../../components/FilteredList";

const WishList = () => {
  const diaryList = useSelector((state) => state);

  return (
    <div>
      <BasicBox
        boxTitle={"Wish List"}
        boxContent={<FilteredList type="wish" list={diaryList} />}
      />
    </div>
  );
};

export default WishList;
