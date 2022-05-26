import styled from "styled-components";

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

const DiaryBox = ({ images, diaryId, title, content, date }) => {
  return (
    <div>
      <StyledBox>
        <img
          src={process.env.PUBLIC_URL + `assets/${images[diaryId]}.jpg`}
          alt="post-thumbnail"
        />
        <DiaryBody>
          <h5>{title}</h5>
          <p className="diary-content">{content}</p>
          <hr />
          <p className="post-date">{date}</p>
        </DiaryBody>
      </StyledBox>
    </div>
  );
};

export default DiaryBox;
