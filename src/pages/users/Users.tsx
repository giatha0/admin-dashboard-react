import { useState } from 'react';
import DataTable from '../../components/dataTable/DataTable'
import './users.scss'
import { GridColDef } from '@mui/x-data-grid';
import Add from '../../components/add/Add';
import { useQuery } from '@tanstack/react-query'


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
    const [open, setOpen] = useState(false);

    const { isLoading, data } = useQuery({
        queryKey: ['allusers'],
        queryFn: () =>
            fetch('http://localhost:8800/api/users/').then(
                (res) => res.json(),
            ),
    })

    return (
        <div className="users">
            <div className="infor">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add new user</button>
            </div>
            {isLoading ? "Loading..." : <DataTable slug="users" columns={columns} rows={data} />}
            {open &&
                <Add
                    slug="user"
                    columns={columns}
                    setOpen={setOpen}
                />
            }
        </div>
    )
}

export default Users