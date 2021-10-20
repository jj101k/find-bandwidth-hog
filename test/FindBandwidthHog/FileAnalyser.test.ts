import assert from "assert"
import {describe, it} from "mocha"
import { FileAnalyser } from "../../index"

describe("File analyser tests", () => {
    it("Can analyse an empty case without failing", async () => {
        const analyser = new FileAnalyser()
        const results = await analyser.analyse([])
        assert.equal(results.size, 0, "Results are empty")
    })
})