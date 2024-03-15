import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

const Table = ({columns, sortColumn, onSort, data}) => {
  return (
    <table className='table'>
        {/* pindahkan table head nya ke tableheader */}
        <TableHeader 
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />

        <TableBody columns={columns} data={data} />
    </table>
  )
}

export default Table