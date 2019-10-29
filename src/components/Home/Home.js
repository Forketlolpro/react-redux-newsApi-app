import React from 'react';
import PropTypes from 'prop-types';
import News from '../News/News';

const Home = (props) => {
    const newsList =props.news.map((item)=>{
        return <News key={item.title} url={item.url} title={item.title} description={item.description} urlToImage= {item.urlToImage} content={item.content}/>
    })
    
    return (<div>{newsList}</div>)
};

Home.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home;