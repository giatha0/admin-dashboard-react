import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../data';
import './users.scss'
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: "avatar", headerName: "Avatar", width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        type: 'string',
        width: 100,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        type: 'string',
        width: 100,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 240,
        editable: true,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'createdAt',
        type: 'string',
        width: 100,
        editable: true,
    },
    {
        field: "verified", headerName: "Verified", width: 100, type: "boolean",
    },
];

const Users = () => {
    return (
        <div className="users">
            <div className="infor">
                <h1>Users</h1>
                <button>Add new user</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
        </div>
    )
}

export default Users