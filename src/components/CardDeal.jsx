import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
          in a few steps
        </h2>
        <p className={`${styles.paragraph} w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          molestiae aspernatur quae amet illo, ab voluptates nemo, suscipit
          culpa cum, id doloribus architecto recusandae neque. Saepe explicabo
          cumque perspiciatis fugit!
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
