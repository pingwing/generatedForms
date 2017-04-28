import React from 'react';
import formSchema from './tmp/formSchemas/testForm';
import Form from "react-jsonschema-form";

export default class FormWithSteps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {step: 0, formData: {}};
  }

  onSubmit = ({formData}) => {
    if (this.state.step !== formSchema.length) {
      this.setState({
        step: this.state.step + 1,
        formData: {
          ...this.state.formsData,
          ...formData
        },
      });
    } else {
      alert("You submitted " + JSON.stringify(formData, null, 2));
    }
  }

  render() {
    const stepSchema = formSchema[this.state.step];

    return (
      <Form
        schema={stepSchema}
        onSubmit={this.onSubmit}
        formData={this.state.formData}/>
    );
  }
}