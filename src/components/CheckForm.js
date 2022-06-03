import styled from "styled-components";

const Check = styled.div`
  margin: 10px 0;

  label {
    display: flex;
    align-items: center;

    cursor: pointer;
  }

  input {
    margin-right: 10px;
  }
`;

const CheckForm = ({ label }) => {
  return (
    <Check>
      <label>
        <input type="checkbox" />
        {label}
      </label>
    </Check>
  );
};

export default CheckForm;
