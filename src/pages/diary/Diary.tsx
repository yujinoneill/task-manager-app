import { useSelector } from "react-redux";

import BasicBox from "../../components/style/BasicBox";
import FilteredList from "../../components/common/FilteredList";
import { RootState } from "../../store/store";

const Diary = () => {
  const diaryList = useSelector((state: RootState) => state.diary);

  return (
    <BasicBox
      boxTitle={"Diary Posts"}
      boxContent={<FilteredList type="diary" list={diaryList} />}
    />
  );
};

export default Diary;
