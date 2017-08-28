const choo = require("choo")
const app = choo()
const http = require("xhr")
const main = require("./templates/views/main")
const API_KEY = require("./config.json")

app.use(function(state, emitter) {
    state.data = []

    emitter.on("search", ( query ) => {
        http.get(`https://api.propublica.org/congress/v1/bills/search.json?query=${query.query}`, {
            headers: {
                "X-API-KEY": API_KEY.key
            }
        },
        function(error, response, body) {
            parsedResponse = JSON.parse(body)
            state.data = parsedResponse.results[0].bills
            emitter.emit("render")
        })
    })
})

app.route("/", main)
app.mount("div")
