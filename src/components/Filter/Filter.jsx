import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Container } from './Filter.styled';

export default class Filter extends Component {
  filterId = nanoid();

  render() {
    const { filter, onChange } = this.props;

    return (
      <Container>
        <Label htmlFor={this.filterId}>
          Find contacts by name
          <Input
            name="filter"
            type="text"
            value={filter}
            onChange={onChange}
            id={this.filterId}
          />
        </Label>
      </Container>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
