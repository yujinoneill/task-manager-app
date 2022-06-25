import BasicBox from "../../components/style/BasicBox";
import FilteredList from "../../components/common/FilteredList";
import { useAppSelector } from "../../store/hook";

const Diary = () => {
  const diaryList = useAppSelector((state) => state.diary);

  return (
    <BasicBox
      boxTitle={"Diary Posts"}
      boxContent={<FilteredList type="diary" list={diaryList} />}
    />
  );
};

export default Diary;
