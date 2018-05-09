import React from 'react';
import { connect } from 'react-redux';
import  { CSVLink } from 'react-csv';


const Export = props => {
  return (
    <CSVLink data={props.notes} className="export-csv">
      <i className="fas fa-download fa-lg"></i>
    </CSVLink>
  );
}
const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}
export default connect(mapStateToProps, {})(Export)