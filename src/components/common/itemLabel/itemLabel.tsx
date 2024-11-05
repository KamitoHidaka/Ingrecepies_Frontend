import './itemLabel.css';

interface Props {
    Text: string
}

export const ItemLabel = ({Text}:Props) => {
    return (
        <div className="itemLabel">
            <p>{Text}</p>
        </div>
    )
}