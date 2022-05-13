import axios from "axios";

class api {
  login = async (req) => {
    const res = await axios.post('http://localhost:3600/login', req)
    localStorage.setItem("access_token", res.data.access_token)
    localStorage.setItem("level", res.data.level)
    return res.data
  }

  getInitial = async () => {
    const res = await axios.get(`http://localhost:3600/initial`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  getUserLogin = async () => {
    const res = await axios.get(`http://localhost:3600/list-user-id`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data[0]
  }

  LeaveUserLogin = async () => {
    const userLogin = await this.getUserLogin()
    const res = await userLogin.Leaves.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1))
    return res
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
    const res = await axios.post('http://localhost:3600/request', data,
      {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
    return res
  }

  getListLeaves = async (params) => {
    let url = `http://localhost:3600/list`

    if (params) url = `http://localhost:3600/list?type=${params.type}&status=${params.status}`

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
    const res = await axios.get(`http://localhost:3600/list?id=${id}`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data[0]
  }

  UpdateStatus = async (req, params) => {
    const res = await axios.put(`http://localhost:3600/approve/${params}`, { status: req }, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  getListUser = async () => {
    const res = await axios.get(`http://localhost:3600/list-user`, {
      headers: {
        access_token: localStorage.getItem("access_token")
      }
    })
    return res.data
  }

  CreateUser = async (req) => {
    console.log(req)
    const res = await axios.post('http://localhost:3600/create-user',
      req,
      {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
    return res.data
  }

  ApplyLeave = async (req) => {
    const res = await axios.post('http://localhost:3600/request',
      req,
      {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      })
  }
}

const searchApi = new api();
export default searchApi;