import { useState } from "react";
import { BetaApiEmailSubs } from "./Api";

export default function SendEmail() {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertMessage, setIsAlertMessage] = useState({
    status: false,
    alert: "",
  });

  // const getDataEmail = useSelector(stateEmail);
  // console.log(getDataEmail, 'ini data email');

  const notifiedHandler = async (e) => {
    e.preventDefault();
    if (!email) {
      return setIsAlertMessage({
        status: false,
        alert: "isi terlebih dahulu emailnya",
      });
    }
    // dispatch(postEmailData(email));

    await BetaApiEmailSubs(email)
      .then((res) => {
        setIsLoading(true);
        if (res.status & res.result) {
          console.log(res.result, "ini resultt");
        } else {
          return setIsAlertMessage({
            status: false,
            alert: "gagal dapt data",
          });
        }
      })
      .catch(() => {
        return setIsAlertMessage({
          status: false,
          alert: "terjadi kesalahan",
        });
      });

    // setTimeout(() => {
    //   setIsLoading(true);
    //   setIsAlertMessage({
    //     status: true,
    //     alert1: "Thank you!",
    //     alert2: "You will be notified in your email when we lauch",
    //   });
    // }, 1500);
  };

  return (
    <div className="bg-white  w-full p-[26px] md:p-20 font-fontRadikalRegular  flex flex-col justify-center items-center">
      <div className=" md:mt-0 mt-[100px] w-full items-center justify-center  flex flex-row center">
        <img
          alt="imgLogo"
          className="md:w-[200px] md:h-[170px] w-[70px] h-[59.71px]"
        />
      </div>
      <div className="flex flex-row  items-center justify-center mt-[100.29px] md:mt-[100.47] ">
        <h1 className=" md:w-[424px] md:h-[77px] h-[38px] w-[212px] font-fontRadikalMedium text-[32px] whitespace-nowrap md:text-[64px] text-[#4C4637CC] md:leading-[77px] leading-[38px] tracking-[0.04em] not-italic">
          Coming Soon
        </h1>
      </div>
      <div
        className={`flex flex-wrap  flex-row center mt-[30px] md:mt-[37px] mb-[40px] ${
          isLoading == true && isAlertMessage.status === true
            ? "md:mb-[37px] mb-[40px]"
            : "md:mb-[107px] mb-[40px]"
        }`}
      >
        <h2 className="md:h-[46px] h-[20px] whitespace-nowrap  font-[400] md:text-[38px] text-[20px] text-[#4C4637CC]/80 md:leading-[46px] leading-[20px] tracking-[0.04em] not-italic">
          Get Notifed When we Launch
        </h2>
      </div>
      {/* {isAlertMessage.status} */}
      {isLoading == true && isAlertMessage.status === true && (
        <div className=" flex flex-col items-center  whitespace-nowrap	">
          <h5 className="text-[#FFD700] tracking-[0.04em] md:text-[16px] text-[12px] leading-[14.4px] md:leading-[19px] font-[400] md:font-[500]">
            {isAlertMessage.alert1}
          </h5>
          <h5 className="text-[#FFD700] tracking-[0.04em] md:text-[16px] text-[12px] leading-[14.4px] md:leading-[19px] font-[400] md:font-[500]">
            {isAlertMessage.alert2}
          </h5>
        </div>
      )}
      <form
        onSubmit={(e) => notifiedHandler(e)}
        className={`${
          isLoading == true && isAlertMessage.status === true
            ? "md:mt-[50px] mt-[40px]"
            : "md:mt-0 mt-40px"
        } md:p-0 md:mb-[270px] mt-[40px] mb-60 flex flex-row  justify-between items-center gap-[20px] md:gap-30`}
      >
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
          className=" shadow-3xl md:p-[10px] border md:font-[500] font-[400] leading-[20px] tracking-[0.04em] border-[#4C463733]/20 bg-white text-[12px] md:text-[16px] outline-none text-[#4C4637CC]/80  text-center flex flex-row justify-center items-center md:w-[442px] w-[190px] py-[8px] h-[40px] md:h-[45px] rounded-[10px] "
        />

        <button
          type="submit"
          className={`font-[600]  ${
            isLoading == true && isAlertMessage.status === true
              ? "bg-[#FFD700]"
              : " bg-[#4C4637CC]/80 "
          } shadow-3xl rounded-[10px] md:px-[10px] md:py-[10px] md:h-[40px] h-[40px] w-[98px] md:w-[157px]  flex flex-row items-center justify-center text-center `}
        >
          <h3
            className={`${
              isLoading == true && isAlertMessage.status == true
                ? "text-[#4C4637CC]/80"
                : "text-white"
            } text-center md:text-[16px] whitespace-nowrap	 md:px-[30px] text-[12px] font-[400] leading-[20px] tracking-[0.04em]`}
          >
            {isAlertMessage.status === true ? "Notified" : "Notify Me"}
          </h3>
        </button>
      </form>
    </div>
  );
}
