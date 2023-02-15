import axios from "axios"

export default function api(value) {
    const api = "https://api.consumet.org/anime/zoro/"
    axios.get(api+value)
    .then(res => {
      const results = res.data;
      return results;
    })
}

