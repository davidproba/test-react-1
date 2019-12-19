import React from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from "material-table";

export default class extends React.Component {
	render() {
		return (
			<div style={{ maxWidth: "100%" }}>
			<MaterialTable
			  columns={[
				{ title: "Name", field: "name" },
				{ title: "Surname", field: "surname" },
				{ title: "Birth Year", field: "birthYear", type: "numeric" },
				{
				  title: "Birth City",
				  field: "birthCity",
				  lookup: { 34: "Berlin", 63: "Hamburg" }
				}
			  ]}
			  data={[
				{ name: "Thomas", surname: "Müller", birthYear: 1987, birthCity: 63 }
			  ]}
			  title="Demo Title"
			/>
		  </div>		);
	}	
}