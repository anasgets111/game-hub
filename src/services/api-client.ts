import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params : {
    key: '23dcf1f81eb043499a1341bbfd23b61a'
  }
  })