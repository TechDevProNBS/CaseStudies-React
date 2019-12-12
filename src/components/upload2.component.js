import React, { Component } from 'react';
import axios from 'axios';
export default class Mine extends React.Component {
  constructor () {
    super();
    this.state = {
      file: null
    };
  }
  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`http://localhost:4500/test-upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response);
      console.log(response.data.Location);
      var url = response.data.Location;
      sessionStorage.setItem("filename", url);
    }).catch(error => {
      // handle your error
    });
  }
  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }
  render () {
    return (
      <form onSubmit={this.submitFile}>
        <input label='upload file' type='file' onChange={this.handleFileUpload} />
        <button type='submit'>Send</button>
      </form>
    );
  }
}
