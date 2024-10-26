import './FormAlert.css'

interface Props {
    ClassName?: string
    Text: string
}

export const FormAlert = ({ ClassName , Text}:Props) => {
    return (
        <div className={`form-alert-error ${ClassName} || ''`.trim()	}>
            <p>{Text}</p>
        </div>
    );
}