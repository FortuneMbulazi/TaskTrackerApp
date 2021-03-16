import PropTypes from 'prop-types';
import Buttons from './Buttons';
import {useLocation} from 'react-router-dom';

const Hearder = ({title, onAdd, showAdd}) => {
    const location = useLocation();

    return (
        <header className = "header">
            <h1>{title}</h1>
            {location.pathname === "/" && <Buttons color = {showAdd ? "red" : "green"} text = {showAdd ? "Close" : "Add"} onClick={onAdd}/>}
        </header>
    )
};

Hearder.defaultProps ={
    title: "Task Tracker",
}

Hearder.propTypes = {
    title: PropTypes.string,
}
//css in js
// const headingstyle = {
//     color: "red",
//     backgroundColor: "black"
// }
export default Hearder;
