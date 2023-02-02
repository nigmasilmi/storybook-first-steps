import "./Label.css";

export interface Props {
  label?: string;
  size?: "normal" | "h1" | "h2" | "h3";
}

const Label = ({ label = "no label", size = "normal" }: Props) => {
  return <span className={`${size}`}>{label}</span>;
};

export default Label;
