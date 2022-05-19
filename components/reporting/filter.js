import React from "react";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function Filter({ getHistory, years }) {
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [status, setStatus] = useState("");
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    getHistory({ type, status, deleted, year })
  }, [type, year, status, deleted])

  return (
    <Form>
      <Form.Check
        type="checkbox"
        label="Is Deleted"
        value={deleted}
        className="mb-3"
        onChange={() => setDeleted(!deleted)}
        checked={deleted}
      />
      <Form.Label>Type</Form.Label>
      <Form.Select
        className="mb-3"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Open this select menu</option>
        <option value="Vacation">Vacation</option>
        <option value="TIL">Time In Lieu (TIL)</option>
        <option value="Sick">Sick</option>
        <option value="Unppaid">Unppaid Leave</option>
        <option value="Bereavement">Bereavement</option>
        <option value="Overtime">Overtime</option>
        <option value="Leave">Leave</option>
        <option value="Other">Other</option>
      </Form.Select>
      <Form.Label>Status</Form.Label>
      <Form.Select
        className="mb-3"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Open this select menu</option>
        <option value="0">Pending</option>
        <option value="1">Approved</option>
        <option value="2">Rejected</option>
      </Form.Select>
      <Form.Label>Year</Form.Label>
      <Form.Select
        className="mb-3"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">Open this select menu</option>
        {
          years.map(el => (
            <option key={el} value={el}>{el}</option>
          ))
        }
      </Form.Select>
    </Form>
  );
}
