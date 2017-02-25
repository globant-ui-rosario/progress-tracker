import React, { Component } from 'react';

class PageContainer extends Component {

    render () {
        return (
            <div>{this.props.children}</div>
        );
    }
};

export default PageContainer;
