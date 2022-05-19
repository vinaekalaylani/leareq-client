import DataTable from 'react-data-table-component'
import searchApi from "../../services/api";
import { success, error } from "../swal";

export default function Table({ getEmployees, employees, handleShow, handleShowEdit }) {
  const handleDelete = async (id) => {
    try {
      await searchApi.deleteUser(id);
      getEmployees({ fullName: "", deleted: false })
      success()
    } catch (err) {
      const { message } = err.response.data
      error(message)
    }
  };

  const columns = [
    {
      name: 'Name',
      maxWidth: '130px',
      selector: row => row.fullName,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Email',
      maxWidth: '100px',
      selector: row => row.email,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Position',
      maxWidth: '100px',
      selector: row => row.position,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Level',
      maxWidth: '100px',
      selector: row => row.level == 0 ? "Staff" : "Superior",
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Reporting Manager',
      maxWidth: '100px',
      selector: row => row.reportingManager,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Aditional Manager',
      maxWidth: '100px',
      selector: row => row.aditionalManager,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Action',
      maxWidth: '600px',
      position: "fixed",
      selector: row => <div>
        <div role="button" className="btn me-2" style={{ backgroundColor: '#ffb74d', color: '#ffff' }} onClick={() => handleShowEdit(row.id)}>Edit</div>
        <div role="button" className="btn me-2" style={{ backgroundColor: '#80cbc4', color: '#ffff' }} onClick={() => handleShow(row.id)}>Detail</div>
        <div role="button" className="btn" style={{ backgroundColor: '#ef5350', color: '#ffff' }} onClick={() => handleDelete(row.id)}>Delete</div>
      </div>
    }
  ]

  return (
    <DataTable
      columns={columns}
      data={employees}
      noHeader
      pagination
      fixedHeader
      fixedHeaderScrollHeight="490px"
      highlightOnHover
    />
  )
}