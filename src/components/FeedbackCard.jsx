import { quotes } from "../assets";

const FeedbackCard = ({ content, title, name, img }) => {
  return (
    <div
      className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10
                    sm:mr-5 mr-0 feedback-card"
    >
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[40px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[36px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4 ">
          <h4>{name} </h4>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
