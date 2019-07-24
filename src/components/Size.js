import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Size extends Component {

    state = {
        dropdownOpen: false,
        SizeValue: ''
    }

    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }


    render() {
        const {sizeChange} = this.props;
        return (
            <div>
            <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{
            padding: '30px',
            marginLeft: '70%'
        }}>
            <DropdownToggle caret>
            {this.state.SizeValue || "Size By"}
            </DropdownToggle>
            <DropdownMenu onClick={(e) => (sizeChange(e.target.value), this.setState({ SizeValue: e.target.value }))}>
            <DropdownItem value="M" >M</DropdownItem>
            <DropdownItem value="L" >L</DropdownItem>
            <DropdownItem value="S" >S</DropdownItem>
            <DropdownItem value="Show All">Show all</DropdownItem>
            </DropdownMenu>
        </Dropdown>
            </div>
        )
    }
}

export default Size;