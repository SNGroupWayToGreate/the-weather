import axios from "axios";

const instanse = axios.create({
	baseURL: "http://api.openweathermap.org/data/2.5/weather",
})


export default function getData(city) {
	return instanse.get(`?q=${city},&APPID=af7bf1bfd6283c44f24d4e1c12f25291`)
		.then((res) => {
			return res.data
		})
}
