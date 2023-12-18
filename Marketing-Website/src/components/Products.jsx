import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchProduct } from "../actions/productSlice";

const Products = () => {
    const dispatch = useDispatch();
    const columns = [
        { id: 'name', name: 'Name' },
        { id: 'description', name: 'Description' },
        { id: 'price', name: 'Price' }
    ]
    const products=useSelector((state)=>state.product)
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

    const handleSearchCall = () => {
      dispatch(fetchProduct(searchTerm));
    };

    const [rows, setRow] = useState([]);
    const [page, setPage] = useState(0);
    const [rowperpage, SetRowperpage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
            setRow(products.data);
    }, [products])


    // const filteredRows = rows?.content?.filter((row) => {
    //     return columns.some((column) => {
    //       const cellValue = row[column.id];
    //       return cellValue.toString().toLowerCase().includes(searchTerm.toLowerCase());
    //     });
    //   });
    
      const rowsWithSerialNumbers = rows?.content?.map((row, index) => {
        return { ...row, serialNumber: index + 1 };
      });  
  
    return (
        <div className="text-center h-screen">
            {products.loading && <h1>Loading...</h1>}
            <Paper className="width-[90%] mx-[5%]">
            <TextField
          label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ margin: '10px' }}
        /> <button style={{ backgroundColor: 'black', color: 'white' }} onClick={handleSearchCall}>Search</button>
                <TableContainer className="h-[450px]">
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                            <TableCell  style={{ backgroundColor: 'black', color: 'white' }}>Sl.No</TableCell>
                                {columns.map((column) => (
                                    <TableCell style={{ backgroundColor: 'black', color: 'white' }} key={column.id}>{column.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
              {rowsWithSerialNumbers?.slice(page * rowperpage, page * rowperpage + rowperpage)
                .map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.serialNumber}</TableCell>
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
                    count={rows.length?rows.length:5} // error
                    component="div"
                    onPageChange={handlechangepage}
                    onRowsPerPageChange={handleRowsPerPage}

                >
                </TablePagination>
            </Paper>

        </div>
    );
}

export default Products;