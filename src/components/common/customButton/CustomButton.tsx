import "./CustomButton.css";

interface Props {
  Type?: "submit" | "reset" | "button";
  Text?: string;
  OnClick?: () => void;
  children?: React.ReactNode
  ClassName?: string
  Disabled?: boolean
}

export const CustomButton = ({ Type, Text, OnClick , children, ClassName, Disabled}: Props) => {
  return (
    <button className= {`custom-button ${ClassName} || ''`.trim()	} onClick={OnClick} type={Type} disabled={Disabled}>
      {children}
      {Text}
    </button>
  );
};
