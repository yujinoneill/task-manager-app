import styled from "styled-components";

import BasicBox from "../../components/BasicBox";
import FilteredList from "../../components/FilteredList";
import { StyledDiv } from "../../components/wishlist/WishBox";

// Styled-components
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Diary = () => {
  return (
    <BasicBox
      boxTitle={"Diary Posts"}
      boxContent={<FilteredList type="diary" list={diaryList} />}
        <StyledDiv>
          <Filter
            btnName={"Add a New Post"}
            category1={"Study"}
            category2={"Daily"}
            path="/new-post"
          />
          <Grid>
            <DiaryBox
              diaryId={0}
              title={"HTML is not easy"}
              content={":("}
              date={new Date().toISOString().slice(0, 10)}
            />
            <DiaryBox
              diaryId={1}
              title={"CSS is so annoying"}
              content={":|"}
              date={new Date().toISOString().slice(0, 10)}
            />
            <DiaryBox
              diaryId={2}
              title={"I love JavaScript"}
              content={":)"}
              date={new Date().toISOString().slice(0, 10)}
            />
            <DiaryBox
              diaryId={3}
              title={"What is React.js?"}
              content={":D"}
              date={new Date().toISOString().slice(0, 10)}
            />
            <DiaryBox
              diaryId={4}
              title={"Node.js is interesting"}
              content={"x)"}
              date={new Date().toISOString().slice(0, 10)}
            />
          </Grid>
        </StyledDiv>
      }
    />
  );
};

export default Diary;
