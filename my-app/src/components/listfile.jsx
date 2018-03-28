import React, { Component } from "react";
import { connect } from "react-redux";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchFileDetails} from "../actions/fileactions";
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


class FilesList extends Component {

  constructor(props) {
        super(props);
        this.state = {fileslist:[]};

        this.cellButton = this.cellButton.bind(this);
        this.downloadfile = this.downloadfile.bind(this);
        this.dateFormatter = this.dateFormatter.bind(this);
    }

//Fetch the file list details on mount
  componentDidMount()
  {
    this.props.dispatch(fetchFileDetails());
  }

  //compoennet will receiveprops of filedetails
  componentWillReceiveProps(nextProps)
  {
    if(nextProps.fileslist){
      this.setState({fileslist:nextProps.fileslist});
    }
  }

  //the button for download option is displayed
  cellButton(cell, row, enumObject, rowIndex)
  {
    return (
      <div>
        <button type="button" className="btn btn-default btn-sm"  onClick={()=>this.downloadfile(row.id)}>
          <span className="glyphicon glyphicon-download"></span> Download
        </button>
      </div>

    )

  }

  dateFormatter(cell, row)
  {
    console.log(cell,'cellll data')
    console.log(row,'row data')
    // return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
  }

  //onclick of download button , the corresponding file gets downloaded
  downloadfile(id)
  {
      console.log(id,'id test')
  }

  render() {
    const tableOptions = {
      prePage: <i className='glyphicon glyphicon-chevron-left' />,
      nextPage: <i className='glyphicon glyphicon-chevron-right' />,
      firstPage: <i className='glyphicon glyphicon-step-backward' />,
      lastPage: <i className='glyphicon glyphicon-step-forward' />
    };

    return (
      <div>
        <BootstrapTable data={ this.state.fileslist } options={ tableOptions } pagination  striped={true} hover={true}>
            <TableHeaderColumn dataField='id' isKey={ true } dataAlign="center" filter={ { type: 'TextFilter'} } dataSort={true} width="20%"> ID</TableHeaderColumn>
            <TableHeaderColumn dataField='filename' dataAlign="center" filter={ { type: 'TextFilter'} } dataSort={true} width="20%">FileName</TableHeaderColumn>
            <TableHeaderColumn dataField='filetype' dataAlign="center" filter={ { type: 'TextFilter'} } dataSort={true} width="20%">FileType</TableHeaderColumn>
            {/*<TableHeaderColumn dataField='timestamp'dataAlign="center" dataFormat={ this.dateFormatter } filter={ { type: 'DateFilter' } } dataSort={true} width="20%">CreatedDate</TableHeaderColumn>*/}
            <TableHeaderColumn dataField='timestamp'dataAlign="center" filter={ { type: 'DateFilter' } } dataSort={true} width="20%">CreatedDate</TableHeaderColumn>
            <TableHeaderColumn dataField="button" dataFormat={this.cellButton}>Download</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default connect((state) => {
      const  fileslist = state.listFileReducer.data
      return{
        fileslist
      };
})(FilesList);
