import PropTypes from 'prop-types';

function Card({children, reverse}) {
//   return (
    //conditional class
    // <div className={`card ${reverse && 'reverse'}`}>
    //     {children}
    // </div>
    // )
    return(
        //conditional style
        <div className="card" style={{backGroundColor: reverse ? 'rgba(0,0,0,.4)' : '#fff',
        color: reverse ? '#fff' : '#000' 
        }}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse : false
}

Card.prototype = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card;