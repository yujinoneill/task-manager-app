import styled from "styled-components";
import BasicBox from "../components/BasicBox";
import DiaryBox from "../components/DiaryBox";

// Styled-components
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Images
const images = [
  "clement-helardot-95YRwf6CNw8-unsplash",
  "danial-igdery-FCHlYvR5gJI-unsplash",
  "ferenc-almasi-eYpcLDXHVb0-unsplash",
  "fotis-fotopoulos-LJ9KY8pIH3E-unsplash",
  "juanjo-jaramillo-mZnx9429i94-unsplash",
];

const Diary = () => {
  return (
    <div>
      <BasicBox
        boxTitle={"Diary Posts"}
        boxContent={
          <Grid>
            <DiaryBox
              images={images}
              diaryId={0}
              title={"HTML is not easy"}
              content={":("}
              date={new Date().toISOString().slice(0, 10)}
            />
            <DiaryBox
              images={images}
              diaryId={1}
              title={"CSS is so annoying"}
              content={":|"}
              date={new Date().toISOString().slice(0, 10)}
            />
            <DiaryBox
              images={images}
              diaryId={2}
              title={"I love JavaScript"}
              content={":)"}
              date={new Date().toISOString().slice(0, 10)}
            />
            <DiaryBox
              images={images}
              diaryId={3}
              title={"What is React.js?"}
              content={":D"}
              date={new Date().toISOString().slice(0, 10)}
            />
            <DiaryBox
              images={images}
              diaryId={4}
              title={"Node.js is interesting"}
              content={"x)"}
              date={new Date().toISOString().slice(0, 10)}
            />
          </Grid>
        }
      />
    </div>
  );
};

export default Diary;
