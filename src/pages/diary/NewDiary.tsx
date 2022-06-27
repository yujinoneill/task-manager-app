import { useEffect } from "react";

import DiaryEditor from "../../components/diary/DiaryEditor";

const NewDiary = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = "My Little Task Manager - New Diary";
  }, []);

  return <DiaryEditor boxTitle="New Diary" />;
};

export default NewDiary;
