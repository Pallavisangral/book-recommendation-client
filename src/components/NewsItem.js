import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        const {title, description, imageUrl, author, genre, newsUrl} = this.props;
        return (
                <div className="card" >
                    <span className="card-title">{title}</span>
                    <div className="wrapper">
                        <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <span><b>Author: </b>{author}</span>
                            <span><b>Genre: </b>{genre}</span>
                            <span className="card-text">{description}</span>
                            <a href="/newsdetail/" className="btn btn-sm btn-primary">... read more</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default NewsItem