import styled from "styled-components";

const Check = styled.div`
  label {
    display: flex;
    align-items: center;
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
