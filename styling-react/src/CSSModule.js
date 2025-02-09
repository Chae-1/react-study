import styles from "./CSSModule.module.css";

const CSSMoudle = () => {
  return (
    <div className="{styles.wrapper}">
      안녕하세요 저는 <span className="something">CSS Moudle!</span>
    </div>
  );
};

export default CSSMoudle;
