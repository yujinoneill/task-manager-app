import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DiaryEditor from "../../components/diary/DiaryEditor";
import { useAppSelector } from "../../store/hook";
import { DiaryProps } from "../../util/interface";

type ParamsType = { id: string };

const EditDiary = () => {
  const [originData, setOriginData] = useState<DiaryProps>();
  const { id } = useParams<ParamsType>() as ParamsType;
  const diaryList = useAppSelector((state) => state.diary);

  const navigate = useNavigate();

  useEffect(() => {
    if (diaryList.length > 0) {
      const targetDiary = diaryList.find((item) => item.id === parseInt(id));

      //targetDiary가 있을 때만
      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/diary", { replace: true });
      }
    }
  }, [id, diaryList, navigate]);

  return originData ? (
    <DiaryEditor boxTitle="Edit Diary" isEdit={true} originData={originData} />
  ) : null;
};

export default EditDiary;
