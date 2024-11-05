import "./CustomInput.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  Placeholder?: string;
  Type: string;
  Require?: boolean;
  AutoComplete?: string;
  register?: UseFormRegisterReturn;
  MaxLenght?: number;
  ClassName?: string
  Id?: string
  Value?: string
  OnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  Accept?:string
}

export const CustomInput = ({
  Placeholder,
  Type,
  Require,
  AutoComplete,
  register,
  MaxLenght,
  ClassName,
  Id,
  Value,
  OnChange,
  Accept

}: Props) => {

  return (
    <input
      className={`default-input ${ClassName} || ''`.trim()	}
      type={Type}
      placeholder={Placeholder}
      required={Require}
      maxLength={MaxLenght}
      autoComplete={AutoComplete}
      value={Value}
      onChange={OnChange}
      accept={Accept}
      id={Id}

      {...register}
    />
  );
};
