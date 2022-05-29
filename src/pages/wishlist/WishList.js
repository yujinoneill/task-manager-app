import BasicBox from "../../components/BasicBox";
import WishBox from "../../components/wishlist/WishBox";

const WishList = () => {
  return (
    <div>
      <BasicBox boxTitle={"Wish List"} boxContent={<WishBox />} />
    </div>
  );
};

export default WishList;
