import React from 'react';
import {
	withRouter
} from 'react-router-dom';

import './menu-item.style.scss';

const  MenuItem = ({title, imageUrl, size, history, linkURL, match}) => {
	return  <div className={`${size} menu-item`}>
				<div
				style ={{
					backgroundImage: `url(${imageUrl})`,
				}}
				className= "background-image"
				></div>
				<div className="content" onClick= {() => history.push(`${match.url}${linkURL}`)}>
					<h1 className="title">{title.toUpperCase()}</h1>
					<span className="subtitle">Shop Now</span>
			</div>
			</div>

}
export default withRouter(MenuItem);