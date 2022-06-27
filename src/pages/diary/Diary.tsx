import { useEffect } from "react";

import BasicBox from "../../components/style/BasicBox";
import FilteredList from "../../components/common/FilteredList";
import { useAppSelector } from "../../store/hook";

const Diary = () => {
  const diaryList = useAppSelector((state) => state.diary);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = "My Little Task Manager - Diary";
  }, []);

  return (
    <BasicBox
      boxTitle={"Diary Posts"}
      boxContent={<FilteredList type="diary" list={diaryList} />}
    />
  );
};

export default Diary;
