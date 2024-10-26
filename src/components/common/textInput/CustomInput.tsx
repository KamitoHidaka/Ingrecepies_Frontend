import "./CustomInput.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  Placeholder: string;
  Type: string;
  Require?: boolean;
  AutoComplete: string;
  register: UseFormRegisterReturn;
  MaxLenght?: number;
}

export const CustomInput = ({
  Placeholder,
  Type,
  Require,
  AutoComplete,
  register,
  MaxLenght
}: Props) => {
  return (
    <input
      className="default-input"
      type={Type}
      placeholder={Placeholder}
      required={Require}
      maxLength={MaxLenght}
      autoComplete={AutoComplete}
      {...register}
    />
  );
};
