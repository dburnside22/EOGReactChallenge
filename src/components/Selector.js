import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export class Selector extends Component {
    constructor(props){
        super(props);
        this.state = {
            values: {
                age: 23
            },
            password: '',
            confirmPassword: '',
        }
    }

    handleChange = () => {

    }

    render() {
        return (
            <div>
                <Select
                value={this.props.values.age}
                onChange={this.handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-simple',
                }}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
        )
    }
}

export default Selector
