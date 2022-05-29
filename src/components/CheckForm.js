import styled from "styled-components";

const Check = styled.div`
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
