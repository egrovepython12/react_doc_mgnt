import React, { Component } from "react";
import { connect } from "react-redux";
import UploadfileComponent from "../components/uploadfile";
import {saveFileDetails, fetchFileDetails} from "../actions/fileactions";

class UploadFile extends Component {

    constructor (props){
        super(props);
        this.state={};
        this.handlefileSubmit=this.handlefileSubmit.bind(this);
    }


    componentDidMount() {
      this.props.dispatch(fetchFileDetails());
    }

    handlefileSubmit(fields) {
      console.log(fields,'fields data after uploading')
        this.props.dispatch(saveFileDetails(
            fields
        ));
    }


    render() {
        return (
            <UploadfileComponent
                handlefileSubmit = {this.handlefileSubmit}
            />
        );
    }
}


export default connect((state) => {

  const uploadData = state.uploadFileReducer;
  const fileslist = state.listFileReducer;

  return{
    uploadData,
    fileslist
  };

})(UploadFile);
