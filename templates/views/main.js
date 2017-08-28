const html = require("choo/html")
const tile = require("../components/tile")
const css = require("sheetify")

const overWrap = css`
    :host {
        padding-right: 20px;
        padding-left: 20px;
        padding-top: 5px;
        padding-bottom: 10px;
        background-color: Gainsboro;
        border: 1px solid darkgrey;
    }
`

const buttonStyle = css`
    :host {
        box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        background-color: tomato;
        margin: 10px;
        padding: 10px;
        border: 1px solid navy;
        font-weight: bold;
    }
`

render = (state, emit) => {

    search = () => {
        let query = document.getElementById("searchBox")
        emit("search", {
            "query": query.value
        })
    }

    return html`
        <div class="container ${overWrap}">
            <h1>Choo ProPublica API Railcar</h1>
            <h3>Search text within Congressional Bills</h3>
            <label for="searchBox">Search:</label>
            <input type="text" id="searchBox" />
            <button id="searchButton" onclick=${search} class="${buttonStyle}">Search!</button>
            ${tile(state, emit)}
        </div>
    `
}

module.exports = render
