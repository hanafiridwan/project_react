import React, { Component } from 'react'
import _ from 'lodash';

export default class TableBody extends Component {
    // harusnya renderCall
    panggilRender = (item, column) => {
        if(column.content) return column.content(item)
        
        return _.get(item,column.path);
    }

    createKey = (item, column) => {
        return item._id + (column.path || column.key);
    }
    // Tujuan membuat variabel createKey ini agar bisa memanggil data movie yang berulang di tbody
  render() {
    const {data, columns} = this.props

    return (
        <tbody>
            {data.map(item => (
                <tr key={item._id}>
                    {columns.map(column => (
                    <td key={this.createKey(item, column)}>
                        {this.panggilRender(item, column)}
                    </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
  }
}
