import styles from "../style";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card">
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
    </div>
  );
};

export default FeatureCard;
