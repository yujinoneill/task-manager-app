import { useContext } from "react";
import { DiaryStateContext } from "../../App";
import BasicBox from "../../components/BasicBox";
import FilteredList from "../../components/FilteredList";

const WishList = () => {
  const diaryList = useContext(DiaryStateContext);

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
