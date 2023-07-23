import { useState } from 'react';
import './products.scss'
import DataTable from '../../components/dataTable/DataTable';
import Add from '../../components/add/Add';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: "avatar", headerName: "Avatar", width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
        field: 'title',
        headerName: 'Title',
        type: 'string',
        width: 250,
    },
    {
        field: 'color',
        headerName: 'Color',
        type: 'string',
        width: 150,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'string',
        width: 100,
    },
    {
        field: 'producer',
        headerName: 'Producer',
        type: 'string',
        width: 200,
    },
    {
        field: 'createdAt',
        headerName: 'createdAt',
        type: 'string',
        width: 150,
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 100,
        type: "boolean",
    },
];

const Products = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="products">
            <div className="infor">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add new Product</button>
            </div>
            <DataTable slug="product" columns={columns} rows={products} />
            {open &&
                <Add
                    slug="product"
                    columns={columns}
                    setOpen={setOpen}
                />
            }
        </div>
    )
}

export default Products