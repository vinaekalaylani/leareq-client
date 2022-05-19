import DataTable from 'react-data-table-component'
import searchApi from "../../services/api";

export default function Table({ leaves, setLeave }) {
  const columns = [
    {
      name: 'Name',
      maxWidth: '200px',
      selector: row => row.User.fullName,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Date From',
      maxWidth: '200px',
      selector: row => row.dateFrom,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Type',
      maxWidth: '20px',
      selector: row => row.type,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Total Days',
      maxWidth: '20px',
      selector: row => row.totalDays,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Status',
      maxWidth: '20px',
      selector: row => row.status == 0 ? "Pending" : (row.status == 1 ? "Approved" : "Rejected"),
      style: {
        fontSize: '14px',
      }
    }
  ]

  const handleClick = async state => {
    const res = await searchApi.getLeaveById({ id: state.id });
    setLeave(res.data);
  };

  return (
    <DataTable
      columns={columns}
      data={leaves}
      noHeader
      onRowClicked={handleClick}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="528px"
      highlightOnHover
    />
  )
}