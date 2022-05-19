
import DataTable from 'react-data-table-component'

export default function Table({ history }) {
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
      name: 'Date To',
      maxWidth: '200px',
      selector: row => row.dateTo,
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
      name: 'Reason',
      maxWidth: '20px',
      selector: row => row.reason,
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
    },
    {
      name: 'Reporting Manager',
      maxWidth: '200px',
      selector: row => row.User.reportingManager,
      style: {
        fontSize: '14px',
      }
    },
    {
      name: 'Aditional Manager',
      maxWidth: '200px',
      selector: row => row.User.aditionalManager,
      style: {
        fontSize: '14px',
      }
    }
  ]

  return (
    <DataTable
      columns={columns}
      data={history}
      noHeader
      pagination
      fixedHeader
      fixedHeaderScrollHeight="549px"
      highlightOnHover
    />
  )
}
