import axios from "axios";

class api {
  login = async (req) => {
    const res = await axios.post('https://leareq-server.herokuapp.com/user/login', req)
    localStorage.setItem("access_token", res.data.access_token)
    localStorage.setItem("level", res.data.level)
    return res
  }

  getInitial = async () => {
    const res = await axios.get(`https://leareq-server.herokuapp.com/user/initial`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  getUserLogin = async () => {
    const res = await axios.get(`https://leareq-server.herokuapp.com/user/user-login`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  ApplyLeave = async (req) => {
    const res = await axios.post('https://leareq-server.herokuapp.com/leave/create',
      req,
      {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
  }

  getListLeaves = async () => {
    const res = await axios.get(`https://leareq-server.herokuapp.com/leave/list`, {
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
    const res = await axios.get(`https://leareq-server.herokuapp.com/leave/list/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  UpdateStatus = async (req, params) => {
    const res = await axios.patch(`https://leareq-server.herokuapp.com/leave/update/${params}`, { status: req }, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  getHistory = async (params) => {
    const {type, status, deleted, year} = params
    const res = await axios.get(`https://leareq-server.herokuapp.com/leave/history?type=${type}&status=${status}&isDeleted=${deleted}&year=${year}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  getListUser = async (params) => {
    const { fullName, deleted } = params
    const res = await axios.get(`https://leareq-server.herokuapp.com/user/list?fullName=${fullName}&isDeleted=${deleted}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  getUser = async (id) => {
    const res = await axios.get(`https://leareq-server.herokuapp.com/user/detail/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }

  CreateUser = async (req) => {
    const res = await axios.post('https://leareq-server.herokuapp.com/user/create',
      req,
      {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
    return res.data
  }

  updateUser = async (req, params) => {
    const res = await axios.patch(`https://leareq-server.herokuapp.com/user/update-leave/${params}`, req, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    console.log(res)
    return res
  }

  deleteUser = async (id) => {
    const res = await axios.delete(`https://leareq-server.herokuapp.com/user/delete/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res
  }
}

const searchApi = new api();
export default searchApi;