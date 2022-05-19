import DataTable from 'react-data-table-component'

export default function Table({ leaves, handleDetail }) {
  const columns = [
    {
      name: 'Name',
      maxWidth: '500px',
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
      maxWidth: '150px',
      selector: row => row.type,
      sortable: true,
      style: {
        fontSize: '14px'
      }
    },
    {
      name: 'Total Days',
      maxWidth: '100px',
      selector: row => row.totalDays,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Status',
      maxWidth: '160px',
      selector: row => row.status == 0 ? "Pending" : (row.status === 1 ? "Approved" : "Rejected"),
      style: {
        fontSize: '14px',
      }
    }
  ]

  const handleClick = () => {
    console.log("jajaj")
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
