import React, { Component } from 'react';
import { Button, ContForm, Input, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  nameInputId = nanoid();

  onChangeFilter = event => {
    const { name, value, id } = event.currentTarget;
    if (
      (name === 'name' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ' ]*$/.test(value)) ||
      (name === 'number' && /^[0-9-]*$/.test(value))
    ) {
      this.setState({ [name]: value, id });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
    this.nameInputId = nanoid();
  };
  render() {
    return (
      <ContForm onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChangeFilter}
            id={this.nameInputId}
            required
          />
        </Label>
        <Label htmlFor={this.nameInputId}>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onChangeFilter}
            id={this.nameInputId}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContForm>
    );
  }
}
