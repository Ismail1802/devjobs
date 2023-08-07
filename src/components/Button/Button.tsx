import styles from "./button.module.scss";
interface ButtonProps {
  text: string;
  contStyle: string;
  typ?: "button" | "submit";
}
const Button = ({ text, contStyle, typ = "button" }: ButtonProps) => {
  return (
    <button type={typ} className={styles[contStyle]}>
      {text}
    </button>
  );
};

export { Button };
