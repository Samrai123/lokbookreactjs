import axios from "axios";
export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers:{
        Authorization:"Cilent-ID i5iqzN0kEUvT5TpOHXxx6JjsxUYyN1caZ4ZyLQeERFU"
    }
})