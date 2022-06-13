import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BasicBox from "../../components/BasicBox";
import FilteredList from "../../components/FilteredList";
import { diaryActions } from "../../store/diary";

const Diary = () => {
  const diaryList = useSelector((state) => state.diary);
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("data");

    if (localData) {
      const localDiaryList = JSON.parse(localData).diary; //localData 직렬화
      dispatch(diaryActions.diaryInit(localDiaryList));
    }
  }, []);

  return (
    <BasicBox
      boxTitle={"Diary Posts"}
      boxContent={<FilteredList type="diary" list={diaryList} />}
    />
  );
};

export default Diary;
