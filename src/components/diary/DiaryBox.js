import styled from "styled-components";
import { getStringDate } from "../../util/date";

const StyledBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  word-wrap: break-word;

  background-color: white;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;

  box-sizing: border-box;

  font-family: "Ubuntu", sans-serif;

  cursor: pointer;

  img {
    width: 100%;
    box-sizing: border-box;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const DiaryBody = styled.div`
  font-size: 14px;
  padding: 15px;

  h5 {
    font-weight: 700;
    font-size: 18px;

    margin-top: 0;
    margin-bottom: 10px;
  }

  .diary-content {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .post-date {
    font-weight: 700;
    margin: 0;
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

const DiaryBox = ({ title, content, date }) => {
  const randomIdx = Math.floor(Math.random() * 5);

  return (
    <StyledBox>
      <img
        src={process.env.PUBLIC_URL + `assets/${images[randomIdx]}.jpg`}
        alt="diary-thumbnail"
      />
      <DiaryBody>
        <h5>{title}</h5>
        <p className="diary-content">{content}</p>
        <hr />
        <p className="post-date">{getStringDate(new Date(date))}</p>
      </DiaryBody>
    </StyledBox>
  );
};

export default DiaryBox;
