import "./CustomButton.css";

interface Props {
  Type: "submit" | "reset" | "button";
  Text: string;
  onclick?: () => void;
}

export const CustomButton = ({ Type, Text, onclick }: Props) => {
  return (
    <button className="custom-button" onClick={onclick} type={Type}>
      {Text}
    </button>
  );
};
