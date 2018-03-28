import React, { Component } from "react";
import { connect } from "react-redux";
import  FilesList  from './listfile';
import toastr from 'toastr';

class UploadfileComponent extends Component {

  constructor(props)
  {
        super(props);
        this.state={
            filename:'',
            filetype:'',
            filedata:'',
            timestamp:new Date().toJSON().slice(0,10).split('-').reverse().join('/')
          };
        this.fileChange=this.fileChange.bind(this);
        this.formSubmit=this.formSubmit.bind(this);
  }

  fileChange(e)
  {
    this.setState({
      filename:e.target.files[0].name,
      filetype:e.target.files[0].type
    })
  }


  formSubmit(e)
  {
    e.preventDefault();
    if(this.state.file!==null)
    {
      console.log(this.state.filename,this.state.filetype,this.state.timestamp,'file data in state')
      // formData['filedata']=this.state.filename
      // formData['filename']=this.state.filename
      // formData['filetype']=this.state.filetype
      // formData['timestamp']=this.state.timestamp
      const reader = new FileReader();
      let formData = new FormData(this);
      // debugger;
      formData.append('filename', 'John');

      console.log(formData,'formdata')
      console.log(reader,'reader data')
      this.props.handlefileSubmit(formData)
    }
    else {
      toastr.info("please select a file for uplaod")
    }

  }
  render() {
    console.log(this.props,'props data')
    return (
      <div>
        <form onSubmit={this.formSubmit} enctype="multipart/form-data">
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
