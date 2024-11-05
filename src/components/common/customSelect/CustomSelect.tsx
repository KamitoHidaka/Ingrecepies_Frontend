import "./CustomSelect.css";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  ClassName?: string;
  register: UseFormRegisterReturn;
  children: React.ReactNode;
}


export const CustomSelect = ({ ClassName, register, children }: Props) => {
    
  return (
    <select className={`custom-select ${ClassName} || ''`.trim()} {...register}>
      {children}
    </select>
  );
};


