import React from "react";
import { Link } from "react-router-dom";
import { VideoProps } from "../../../types/data/video/props.interface";
import {
  IMP,
  Carrier,
  CertificationData,
  CertificationOptions,
  Response,
} from "iamport-capacitor";

const VideosView: React.FC<VideoProps> = ({ item }) => {
  const goToPlayer = {
    pathname: "/player",
    search: `?vod=${item._id}`,
    state: {
      item,
    },
  };

  const callback = (response: Response) => {
    const { imp_uid, merchant_uid } = response;
    alert(`UID: ${imp_uid}, Merchant_number: ${merchant_uid}`);
  };

  const callbackOnBack = () => {
    alert("Stop to verification");
  };

  const onAgeVerification = () => {
    const imp = new IMP();
    const userCode: string = process.env.REACT_APP_IAMPORT_KEY! as string;
    const carrier: Carrier = "LGT";

    const data: CertificationData = {
      merchant_uid: `mid_${new Date().getTime()}`,
      company: "VBN",
      carrier,
      name: "Tester",
      phone: process.env.REACT_APP_TEST_PHONENUMBER! as string,
    };

    const options: CertificationOptions = {
      userCode,
      data,
      callback,
      callbackOnBack,
    };
    imp.certification(options);
  };

  return (
    <li>
      {item.age_verification === "false" ? (
        <Link to={goToPlayer} className="text-black hover:text-blue-500">
          {item.title}
        </Link>
      ) : (
        <span onClick={onAgeVerification}>
          Please you checking age verification
        </span>
      )}

      <span>
        <img
          src={
            item.owner?.avatarUrl
              ? `${process.env.REACT_APP_SERVER_URL}/${item.owner.avatarUrl}`
              : `${process.env.REACT_APP_SERVER_URL}/assets/images/defaultImg.png`
          }
          alt="avatar"
          width={55}
          height={40}
        />
        {item.owner?.nickname}
      </span>
      <p>Theme {item.theme}</p>
      <p>{item.date}</p>
      <p>{item.description}</p>
    </li>
  );
};

export default VideosView;
