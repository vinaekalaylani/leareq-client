import axios from "axios";

class api {
  login = async (req) => {
    const res = await axios.post('http://localhost:3600/user/login', req)
    localStorage.setItem("access_token", res.data.access_token)
    localStorage.setItem("level", res.data.level)
    return res
  }

  getInitial = async () => {
    const res = await axios.get(`http://localhost:3600/user/initial`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  getUserLogin = async () => {
    const res = await axios.get(`http://localhost:3600/user/user-login`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  ApplyLeave = async (req) => {
    const res = await axios.post('http://localhost:3600/leave/create',
      req,
      {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
  }

  getListLeaves = async () => {
    const res = await axios.get(`http://localhost:3600/leave/list`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  getLeaveById = async (params) => {
    let leaves = await this.getListLeaves()
    let id = leaves.data[0].id
    if (params.id) id = params.id
    const res = await axios.get(`http://localhost:3600/leave/list/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  UpdateStatus = async (req, params) => {
    const res = await axios.patch(`http://localhost:3600/leave/update/${params}`, { status: req }, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  getListUser = async () => {
    const res = await axios.get(`http://localhost:3600/user/list`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  getUser = async (id) => {
    const res = await axios.get(`http://localhost:3600/user/detail/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  CreateUser = async (req) => {
    const res = await axios.post('http://localhost:3600/user/create',
      req,
      {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
    return res.data
  }

  updateLeave = async (req, params) => {
    const res = await axios.patch(`http://localhost:3600/user/update/${params}`, { leaveAvailable: req }, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:3600/user/delete/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }
}

const searchApi = new api();
export default searchApi;