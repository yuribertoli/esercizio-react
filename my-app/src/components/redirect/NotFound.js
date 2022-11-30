import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div id="notFound">
            <img className="imgNotFound" src={require('../../img/not-found.jpg')} alt={'Not Found'} />
            <Link to={'/'}>
                <button className="backHome">Back to Home Page</button>
            </Link>
        </div>
    )
}

export default NotFound