import styled from "styled-components";

import { FaGlobe, FaTwitter, FaGithub } from "react-icons/fa";

import BasicBox from "../components/style/BasicBox";
import Form from "../components/Form";

const Background = styled.div`
  height: 100px;
  background-color: #6096ba;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.65fr 0.35fr;
  grid-template-rows: 1fr;
  grid-gap: 20px;

  box-sizing: border-box;

  .order-1 {
    order: 1;

    @media screen and (max-width: 992px) {
      order: 2;
    }
  }

  .order-2 {
    order: 2;

    @media screen and (max-width: 992px) {
      order: 1;
    }
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const ProfileContent = styled.div`
  .user {
    text-align: center;

    margin-top: -50px;

    img {
      width: 100px;
      border: 7px solid white;
      border-radius: 50%;
      box-sizing: content-box;
    }

    h4 {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 24px;
    }

    .user-id {
      color: #8b8c89;
    }

    .link {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const LinkButton = styled.button`
  width: 50px;
  height: 50px;

  cursor: pointer;

  background-color: #a3cef1;
  color: white;

  border-radius: 50%;
  border: 1px solid #a3cef1;

  text-align: center;
  transition: 0.25s;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;

  font-size: 24px;

  &:hover {
    background-color: white;
    color: #a3cef1;
  }
`;

const MyAccount = () => {
  return (
    <Container>
      <div className="order-1">
        <BasicBox boxTitle="Edit Profile" boxContent={<Form />} />
      </div>
      <div className="order-2">
        <BasicBox
          padding="0"
          marginTop="0"
          boxContent={
            <div>
              <Background />
              <ProfileContent>
                <div className="user">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/1.png"}
                    alt="profile-pic"
                  />
                  <h4 className="user-name">Yujin Oneill</h4>
                  <p className="user-id">@yujinoneill</p>
                  <p>
                    "It is kind of fun to do the impossible."
                    <br />— Walt Disney
                  </p>
                  <hr />
                  <div className="link">
                    <a href="https://velog.io/@yujinoneill">
                      <LinkButton>
                        <FaGlobe />
                      </LinkButton>
                    </a>
                    <a href="https://twitter.com/yujinoneill">
                      <LinkButton>
                        <FaTwitter />
                      </LinkButton>
                    </a>
                    <a href="https://github.com/yujinoneill">
                      <LinkButton>
                        <FaGithub />
                      </LinkButton>
                    </a>
                  </div>
                </div>
              </ProfileContent>
            </div>
          }
        />
      </div>
    </Container>
  );
};

export default MyAccount;
