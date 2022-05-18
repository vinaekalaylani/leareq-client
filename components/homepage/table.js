import DataTable from 'react-data-table-component'

export default function Table({ leaves }) {
  const columns = [
    {
      name: 'Date From',
      maxWidth: '200px',
      selector: row => row.dateFrom,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Date To',
      maxWidth: '200px',
      selector: row => row.dateTo,
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
      selector: row => row.totalDays,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Status',
      maxWidth: '200px',
      selector: row => row.status == 0 ? "Pending" : ( row.status === 1 ? "Approved" : "Rejected" ) ,
      style: {
        fontSize: '14px',
      }
    }
  ]

  return (
    <div className="list-container pt-2">
      <DataTable
        columns={columns}
        data={leaves}
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        fixedHeader
		    fixedHeaderScrollHeight="192px"
        highlightOnHover
      />
    </div>
  )
}
