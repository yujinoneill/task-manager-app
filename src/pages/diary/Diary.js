import { useSelector } from "react-redux";

import BasicBox from "../../components/style/BasicBox";
import FilteredList from "../../components/common/FilteredList";

const Diary = () => {
  const diaryList = useSelector((state) => state.diary);

  return (
    <BasicBox
      boxTitle={"Diary Posts"}
      boxContent={<FilteredList type="diary" list={diaryList} />}
    />
  );
};

export default Diary;
