import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class OrderFilter extends React.Component {
  state = {
    dropdownOpen: false
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
      const {priceLowToHigh, priceHighToLow} = this.props;
    return (
        <>
        <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{
            padding: '30px',
            marginLeft: '70%'
        }}>
            <DropdownToggle caret>
            Order By
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem value="ascending" onClick={priceLowToHigh}>Low to high</DropdownItem>
            <DropdownItem value="descending" onClick={priceHighToLow}>High to low</DropdownItem>
            </DropdownMenu>
        </Dropdown>
      </>
    );
  }
}

export default OrderFilter