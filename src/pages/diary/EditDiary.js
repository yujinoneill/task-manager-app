import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import DiaryEditor from "../../components/diary/DiaryEditor";

const EditDiary = () => {
  const [originData, setOriginData] = useState();
  const { id } = useParams();
  const diaryList = useSelector((state) => state.diary);

  const navigate = useNavigate();

  useEffect(() => {
    if (diaryList.length > 0) {
      const targetDiary = diaryList.find(
        (item) => parseInt(item.id) === parseInt(id)
      );

      //targetDiary가 있을 때만
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/diary", { replace: true });
      }
    }
  }, [id, diaryList, navigate]);

  return (
    originData && (
      <DiaryEditor
        boxTitle="Edit Diary"
        isEdit="true"
        originData={originData}
      />
    )
  );
};

export default EditDiary;
