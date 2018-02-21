import React from 'react'

export default (fieldName, handlerName, defaultValue) => Component =>
  class WithState extends React.Component {
    state = {
      [ fieldName ]: defaultValue
    }

    render() {
      const props = {
        [fieldName]: this.state[fieldName],
        [handlerName]: (value) => this.setState({ [fieldName]: value })
      }

      return <Component {...props} />
    }
  }
