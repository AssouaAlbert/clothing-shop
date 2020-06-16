import React from 'react';
import './directory.style.scss';
import { connect } from 'react-redux'
import {getDirectory} from '../../redux/directory/diectory.selector' 
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({directory}) => {
        return <div className="directory-menu">
            {
                // this.state.sections.map(({id, title, imageUrl, size}) => {
                    directory.map(({id, ...otherSectionProps}) => {
                    return (
                        <MenuItem
                        key={id}
                        {...otherSectionProps}
                        />
                    )
                })
            }
        </div>
}
const mapStateToProps = (state, ownProps) => {
    return {
        directory: getDirectory(state)
    }
}
export default connect(mapStateToProps)(Directory);