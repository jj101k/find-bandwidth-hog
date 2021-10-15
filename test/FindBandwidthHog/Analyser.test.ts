import assert from "assert"
import {describe, it} from "mocha"
import { Analyser } from "../../index"

describe("Analyser tests", () => {
    it("Can analyse an empty case without failing", async () => {
        const analyser = new Analyser()
        assert.doesNotThrow(() => analyser.analyse([]))
    })
})