import { useContext } from "react";

import { DiaryStateContext } from "../../App";

import BasicBox from "../../components/BasicBox";
import FilteredList from "../../components/FilteredList";

const Diary = () => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <BasicBox
      boxTitle={"Diary Posts"}
      boxContent={<FilteredList type="diary" list={diaryList} />}
    />
  );
};

export default Diary;
