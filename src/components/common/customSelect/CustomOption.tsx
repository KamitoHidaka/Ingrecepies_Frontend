import './CustomSelect.css';

interface Option{
    Value: string
    children:React.ReactNode
}

export const CustomOption = ({ Value, children}: Option) => {
    return (
        <option value={Value}>
            {children}
        </option>
    )
}