import React, { Component } from "react";
import { connect } from "react-redux";
import  FilesList  from './listfile';

class UploadfileComponent extends Component {

  constructor(props)
  {
        super(props);
        this.state={file:null};
        this.fileChange=this.fileChange.bind(this);
        this.formSubmit=this.formSubmit.bind(this);
  }

  fileChange(e)
  {
    this.setState({file:e.target.files[0]})
    console.log(this.props.files,'props data')
  }

  componentWillReceiveProps(nextProps)
  {
    console.log(nextProps,'nexttttt')
  }
  formSubmit(e)
  {
    e.preventDefault();
    this.props.handlefileSubmit(this.state.file)
    console.log(this.state.file,'file upload progress')

  }
  render() {
    console.log(this.props.files,'props data')
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <h5>File Upload</h5>
          <input type="file" className="fileInput" onChange={this.fileChange}  />
          <button className="submitButton" type="submit">Upload</button>
        </form>
        <div>
          <h5>List of Uploaded documents</h5>
            <FilesList/>
        </div>
      </div>
    );
  }
}


export default connect((state) => {

  console.log(state,'steeeeeeeee')
})(UploadfileComponent);
