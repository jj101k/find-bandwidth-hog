import assert from "assert"
import {describe, it} from "mocha"
import { FileAnalyser } from "../../index"

describe("File analyser tests", () => {
    it("Can analyse an empty case without failing", async () => {
        const analyser = new FileAnalyser()
        const results = await analyser.analyse([])
        assert.equal(results.size, 0, "Results are empty")
    })
    it("Can analyse a trivial sample CLF file", async () => {
        const analyser = new FileAnalyser()
        const results = await analyser.analyse([
            `localhost - - [11/Mar/2021:19:53:33 +0000] "POST / HTTP/1.1" 200 9071 CUPS-Get-PPDs -`
        ])
        assert.equal(results.size, 1, "One result found")
        assert.equal(results.get("/"), 1, "One instance of /")
    })
})