
import urlDatas from "../fixtures/checkUrl.json"

describe("检查url", () =>{

    urlDatas.forEach((urlInfo) =>{
        it(`校验 URL：${urlInfo.visitUrl}`, function () {
            cy.visit(urlInfo.visitUrl)
            cy.url().should("match", new RegExp(urlInfo.expectUrl))
            if (urlInfo.htmlTitle !== "") {
                cy.title().should("contain", urlInfo.htmlTitle)
            }
            if (urlInfo.htmlText !== "") {
                cy.contains(urlInfo.htmlText).should("exist")
            }
        });
    })
})