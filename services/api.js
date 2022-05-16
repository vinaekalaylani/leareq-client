import axios from "axios";

class api {
  login = async (req) => {
    const res = await axios.post('https://leareq-server.herokuapp.com/user/login', req)
    localStorage.setItem("access_token", res.data.access_token)
    localStorage.setItem("level", res.data.level)
    return res.data
  }

  getInitial = async () => {
    const res = await axios.get(`https://leareq-server.herokuapp.com/user/initial`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  getUserLogin = async () => {
    const res = await axios.get(`https://leareq-server.herokuapp.com/user/user-login`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  QuickApply = async (req) => {
    const dateFrom = new Date(Date.now()).toISOString().substring(0, 10);

    const currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    const dateTo = year + "-" + month + "-" + day

    const data = {
      type: "Leave",
      dayType: "Full",
      dateFrom,
      dateTo,
      reason: req
    }
    
    const res = await axios.post('https://leareq-server.herokuapp.com/leave/create', data,
      {
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

  getListLeaves = async (params) => {
    let url = `https://leareq-server.herokuapp.com/leave/list`

    if (params) url = `https://leareq-server.herokuapp.com/leave/list?type=${params.type}&status=${params.status}`

    const res = await axios.get(url, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })

    const level = localStorage.getItem("level")
    if (level == 0) {
      const user_login = await this.getUserLogin()
      const res_by_level = await res.data.filter(el => el.UserId == user_login.id)
      return res_by_level
    }

    return res.data
  }

  getLeaveById = async (params) => {
    let leaves = await this.getListLeaves()
    let id = leaves[0].id
    if (params.id) id = params.id
    const res = await axios.get(`https://leareq-server.herokuapp.com/leave/list/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  UpdateStatus = async (req, params) => {
    const res = await axios.patch(`https://leareq-server.herokuapp.com/leave/update/${params}`, { status: req }, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  getListUser = async () => {
    const res = await axios.get(`https://leareq-server.herokuapp.com/user/list`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  getUser = async (id) => {
    const res = await axios.get(`https://leareq-server.herokuapp.com/user/detail/${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
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

  updateLeave = async (req, params) => {
    const res = await axios.patch(`https://leareq-server.herokuapp.com/user/update/${params}`, { leaveAvailable: req }, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
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