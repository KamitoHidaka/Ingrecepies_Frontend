import "./CustomInput.css";

interface Props {
  Placeholder: string;
  Type: string;
  Require?: boolean;
}

export const CustomInput = ({ Placeholder, Type, Require }: Props) => {
  return (
    <div>
      <input className="input" type={Type} placeholder={Placeholder}  required={Require}/>
    </div>
  );
};
