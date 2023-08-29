import { ArrowIcon } from "../../assets/arrow-icon";

const ChildrenStatus = ({dataLeft}) => {
    const { bgcolor, textcolor, quantity, nametitle} = dataLeft;
  return (
    <>
      <div className="flex justify-around items-center ">
        <div style={{background : bgcolor }} className="w-[40px] h-[40px] rounded flex justify-center items-center">
          <ArrowIcon className="text-xl" style={{ color : textcolor}}/>
        </div>
        <div className="ml-2">
          <p className="text-lg m-0">{quantity}</p>
          <p className="text-xs m-0">{nametitle}</p>
        </div>
      </div>
    </>
  );
};

export default ChildrenStatus;
