import React from 'react';

export default class Keypad extends React.Component {
    
    handlePassword = () => console.log("Entering password...")

    render() {
        return(
            <div>
                <input onKeyUp={this.handlePassword} type="password" />
            </div>
        )
    }
}
