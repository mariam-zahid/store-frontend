import React from "react";
import styles from "./style.module.css";
import section3 from "../../../../assets/images/exclusive-linen-collection.jpeg";
import Button from "../../../../Components/UI/Button";
import WrapperContainer from "../../../../Components/UI/WrapperContainer";

const ExclusiveLinenCollection = () => {
  return (
    <div className={styles["section-wrapper"]}>
      <WrapperContainer>
        <div className={styles["inner-container"]}>
          <h2
            style={{
              textAlign: "center",
              margin: "1rem 0",
            }}
          >
            Exclusive Linen Collections
          </h2>
          <p>
            Discover our Signature Series, a range of bespoke linen collections
            meticulously crafted for discerning hotels seeking to create an
            extraordinary guest experience, unleashing the power of elegance in
            every thread.
          </p>
        </div>
      </WrapperContainer>

      <img
        style={{
          margin: "1rem 0",
          width: "100%",
          height: "100%",
          maxHeight: "500px",
          objectFit: "cover",
        }}
        src={section3}
        alt="Primary Logo"
      />

      <WrapperContainer>
        <div
          style={{
            textAlign: "center",
          }}
          className={styles["inner-container"]}
        >
          <p className={styles["section-head-paragraph"]}>
            Explore our Elite Collection, an exclusive selection of contemporary
            and design-forward linens that reflect the latest trends in luxury
            hospitality
          </p>

          <div
            style={{
              display: "inline-block",
            }}
          >
            <Button
              style={{
                fontFamily: "Cinzel, serif",
                paddingLeft: "4rem",
                paddingRight: "4rem",
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default ExclusiveLinenCollection;
