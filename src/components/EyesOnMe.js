import React from 'react';

export default class EyesOnMe extends React.Component {

    focusOnMe = () => {console.log("Good!")}
    watchMe = () => {console.log("Hey! Eyes on me!")}

    render(){
        return(
            <div>
                <button onFocus={this.focusOnMe} onBlur={this.watchMe}>Button</button>
            </div>
        )
    }
}