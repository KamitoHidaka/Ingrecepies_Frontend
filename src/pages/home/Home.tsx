import { Link } from "react-router-dom"
import { RecepieItem } from "../../components/common/recepieItem/RecepieItem"

export const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <RecepieItem/>

            <Link to="/profile">Profile</Link>
        </>
    )
}
