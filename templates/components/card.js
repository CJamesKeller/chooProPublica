const html = require("choo/html")
const css = require("sheetify")

const cardStyle = css`
    :host {
        border: 2px solid navy;
        box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.3), 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        margin-bottom: 20px;
        padding-left: 30px;
        padding-right: 30px;
        background-color: cornsilk;
        break-inside: avoid;
    }
`
const cardWrap = css`
    :host {
        column-width: 40vw;
        padding-right: 20px;
    }
`

card = (state, emit) => {

    let results = state.data

    return html`
        <div class="container">
            <h2>Results:</h2>
            <div class=${cardWrap}>
                ${results.map(result => {
                    let spnsrTtl = result.sponsor_title
                    spnsrTtl = spnsrTtl.slice(0, spnsrTtl.length - 1)

                    return html`
                        <div class="${cardStyle}">
                            <h3>${result.number}</h3>
                            <h2>${result.title}</h2>
                            <h3>
                                Introduced by ${spnsrTtl}. ${result.sponsor_name}
                                (${result.sponsor_party}, ${result.sponsor_state})
                                on ${result.introduced_date}
                            </h3>
                            <a href=${result.gpo_pdf_uri}>PDF</a>
                            <span> or </span>
                            <a href=${result.govtrack_url}>Govtrack</a>
                            <br />
                            <h3>Summary:</h3>
                            <p>${result.summary_short || "(Summary not available)"}</p>
                            <br />
                            <h3>Last Major Action:</h3>
                            <h4>(On ${result.latest_major_action_date})</h4>
                            <p>${result.latest_major_action}</p>
                        </div>
                    `
                })}
            </div>
        </div>
    `
}

module.exports = card
