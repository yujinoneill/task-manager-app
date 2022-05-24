import BasicBox from "../components/BasicBox";
import Form from "../components/Form";

const MyAccount = () => {
  return (
    <div>
      <BasicBox boxTitle={"Edit Profile"} boxContent={<Form />} />
    </div>
  );
};

export default MyAccount;
