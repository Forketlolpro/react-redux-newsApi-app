import PropTypes from 'prop-types';
import React from 'react';
import './News.css';

const News = (props) => {
    return (
        <div className='News'>
            <img src={props.urlToImage}/>
            <div>
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <a href={props.url}>{props.content}</a>
            </div>
        </div>
    )
}

News.propTypes = {
    urlToImage: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default News;