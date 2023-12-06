// import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

// const ProductsTable = () => {
//     const columns = [
//         {id:'id',name:'Id'},
//         {id:'name',name:'Name'},
//         {id:'description',name:'Description'},
//         {id:'price',name:'Price'}
//     ]
//   return (
//     <div>
//         <h1>hello</h1>
//       <Paper sx={{width:'70%'}}>
//         <TableContainer>
//           <Table>
//             <TableHead>
//                 <TableRow>
//                 {columns.map((column)=>{
//                     <TableCell key={column.id}>{column.name}</TableCell>
//                 })}
//                 </TableRow>
//             </TableHead>
//           </Table>
//         </TableContainer>
//       </Paper>
//     </div>
//   );
// };

// export default ProductsTable;


import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import productsData from './productsData'

const ProductsTable = () => {
    const columns = [
        { id: 'id', name: 'Id' },
        { id: 'name', name: 'Name' },
        { id: 'description', name: 'Description' },
        { id: 'price', name: 'Price' }
    ]

    const handlechangepage = (event,newpage) => {
        setPage(newpage)
    }
    const handleRowsPerPage = (event) => {
        SetRowperpage(+event.target.value)
        setPage(0);
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setPage(0);
      };

    const [rows, setRow] = useState([]);
    const [page, setPage] = useState(0);
    const [rowperpage, SetRowperpage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
            setRow(productsData);
    }, [])

    const filteredRows = rows.filter((row) => {
        return columns.some((column) => {
          const cellValue = row[column.id];
          return cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase());
        });
      });

    return (
        <div className="text-center h-screen">
            <h1>MUI Table</h1>

            <Paper className="width-[90%] mx-[5%]">
            <TextField
          label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ margin: '10px' }}
        />
                <TableContainer className="h-[450px]">
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell style={{ backgroundColor: 'black', color: 'white' }} key={column.id}>{column.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {filteredRows && filteredRows
                .slice(page * rowperpage, page * rowperpage + rowperpage)
                .map((row, i) => (
                  <TableRow key={i}>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{row[column.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    rowsPerPage={rowperpage}
                    page={page}
                    count={rows.length}
                    component="div"
                    onPageChange={handlechangepage}
                    onRowsPerPageChange={handleRowsPerPage}

                >

                </TablePagination>
            </Paper>

        </div>
    );
}

export default ProductsTable;