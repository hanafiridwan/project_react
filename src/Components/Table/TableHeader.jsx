import React, { Component } from 'react'

export default class TableHeader extends Component {
    raiseShort = path => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path){
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc"; //asc = ascrending, desc = descrending. ini agar urutan data bisa dimulai dari A - Z(asc), atau sebaliknya Z - A_desc
        }else{
            sortColumn.order = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    }
  render() {
    return(
    <>
        <thead>
            <tr>
                {/* <th onClick={() => this.raiseShort("title")}>Title</th>
                <th onClick={() => this.raiseShort("genre.name")}>Genre</th>
                <th onClick={() => this.raiseShort("numberInstock")}>Stock</th>
                <th onClick={() => this.raiseShort("dailyRentalRate")}>Rate</th>
                <th onClick={() => this.raiseShort("")}>Follow</th>
                <th onClick={() => this.raiseShort("")}>Action</th> */}
                {/* kita sederhanakan */}
                {this.props.columns.map(column => (
                    <th key={column.path || column.key} onClick={() => this.raiseShort(column.path)}>{column.label}</th>
                ))}
            </tr>
        </thead>
    </>
    )
  }
}
