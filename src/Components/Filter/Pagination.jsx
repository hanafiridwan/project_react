import React from 'react'
import propTypes from 'prop-types';
import _ from 'lodash';
// import { propTypes } from 'react-bootstrap/esm/Image';

const Pagination = (props) => {
  const {itemCount, pageSize, currentPage, onPageChange } = props //itemCount ini untuk menghitung data yang akan ditampilkan, contoh mau tampilkan data 100 dengan pembagian 10 10.
  
  const pageCount = Math.ceil(itemCount / pageSize) //variabel digunakan untuk menghitung data agar bisa memunculkan data sesuai dengan keinginan.
  
  if(pageCount === 1) return null; //dibaca: jika atau saat web nya dibuka maka sudah pasti ke pagination 1 atau defaultnya.
  const pages = _.range(1, pageCount + 1) //untuk menghitung paginationnya jadi saat teken tombol next nya maka akan lanjut ke default 1 + 1 yaitu 2, dst.
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          // logic li dibawah sama kayak logic di GroupList.jsx
          <li key={page} className={page === currentPage ? "page-item active" : "page-item"}> 
            <a className='page-link' onClick={() => onPageChange(page)}>
                 {page}
            </a> 
            {/* dibaca: jalankan link a nya yang saat di klik akan menjalankan onPageChange nya */}
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  // isRequired ini maksudnya adalah harus diisi.
  itemCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired
}

export default Pagination