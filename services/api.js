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
    return res
  }

  getHistory = async (params) => {
    const {type, status, deleted, year} = params
    const res = await axios.get(`http://localhost:3600/leave/history?type=${type}&status=${status}&isDeleted=${deleted}&year=${year}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  getListUser = async (params) => {
    const { fullName, deleted } = params
    const res = await axios.get(`http://localhost:3600/user/list?fullName=${fullName}&isDeleted=${deleted}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  getUser = async (id) => {
    const res = await axios.get(`http://localhost:3600/user/detail/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
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

  updateUser = async (req, params) => {
    const res = await axios.patch(`http://localhost:3600/user/update-leave/${params}`, req, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    console.log(res)
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