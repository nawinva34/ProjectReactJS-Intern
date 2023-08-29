import { ArrowIcon } from "../../assets/arrow-icon";
import ChildrenStatus from "./children-status";

const StatusBoard = (props) => {
  console.log(props.type);
  const dataLeft = [
    {
      id: 1,
      bgcolor: "#28C76F1F",
      textcolor: "#6FCF97",
      quantity: "10 คน",
      nametitle: props.type ? "นักกีฬาทั้งหมด" : "บุคลากรทั้งหมด",
    },
    {
      id: 2,
      bgcolor: "#0062FF1F",
      textcolor: "#56CCF2",
      quantity: "5 คน",
      nametitle: props.type ? "จำนวนนักกีฬา" : "จำนวนบุคลากรชาย",
    },
    {
      id: 3,
      bgcolor: "#EA54551F",
      textcolor: "#EB5757",
      quantity: "5 คน",
      nametitle: props.type ? "จำนวนนักกีฬาหญิง" : "จำนวนบุคลากรหญิง",
    },
  ];

  const dataRight = [
    {
      id: 1,
      bgcolor: "#0062FF1F",
      textcolor: "#56CCF2",
      quantity: "5 คน",
      nametitle: props.type ? "อายุเฉลี่ยนักกีฬาชาย" : "อายุเฉลี่ยบุคลากรชาย",
    },
    {
      id: 2,
      bgcolor: "#EA54551F",
      textcolor: "#EB5757",
      quantity: "25 คน",
      nametitle: props.type ? "อายุเฉลี่ยนักกีฬาหญิง" : "อายุเฉลี่ยบุคลากรหญิง",
    },
  ];

  return (
    <>
      <div className="flex">
        <div className="w-[585px] h-[106px] flex justify-around items-center bg-white rounded-md shadow-2xl">
          <div className="w-[585px] h-[106px] flex justify-around items-center bg-white rounded-md shadow-2xl">
            {dataLeft.map((item) => (
              <ChildrenStatus key={item.id} dataLeft={item} />
            ))}
          </div>
        </div>
        <div className="w-[453px] h-[106px] ml-5 flex justify-around items-center bg-white rounded-md shadow-2xl">
          {dataRight.map((item) => (
            <ChildrenStatus key={item.id} dataLeft={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StatusBoard;
