import React, { Component } from 'react';
import axios from 'axios';
import Dropzone from "./dropzone.component.js";
import "./Upload.css";
import Progress from "./progress.component.js";

export default class Mine extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      file: null,
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    };
  }
  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.files[0]);
    axios.post(`http://51.11.59.169:4500/test-upload`, formData, {
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
  
//   handleFileUpload = (event) => {
//     this.setState({file: event.target.files});
//   }

  onFilesAdded = (files) => {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));
}

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          } class="btn btn-danger" style={{ marginLeft: "65px" }}
        >
          Remove
        </button>
      );
    } else {
      return (
        <div>
          {/* Once your photo is selected, click here to upload:  */}
          <button
            disabled={this.state.files.length < 0 || this.state.uploading}
            onClick={this.submitFile} class="btn btn-primary" style={{ marginLeft: "65px" }}
          >Upload</button>
        </div>
      );
    }
  }

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="Image uploaded"
            src="baseline-check_circle_outline-24px.svg"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }
  
  render () {
    return (
        <div>
      {/* <form onSubmit={this.submitFile}>
        <input label='upload file' type='file' onChange={this.handleFileUpload} />
        <button type='submit'>Send</button>
      </form> */}

        <div className="Upload">
        {/* <span className="Title">Upload a photo by clicking the circle or by dragging and dropping a photo on the circle.</span> */}
        <div className="Content">
        <div>
            <Dropzone
            onFilesAdded={this.onFilesAdded}
            disabled={this.state.uploading || this.state.successfullUploaded}
            />
        </div>
        <div className="Files">
            {this.state.files.map(file => {
            console.log(file.name);
            return (
                <div key={file.name} className="Row">
                <span className="Filename">{file.name}</span>
                {this.renderProgress(file)}
                </div>
            );
            })}
        </div>
        </div>
        <div className="Actions">{this.renderActions()}</div>
        </div>
    </div>
    );
  }
}
