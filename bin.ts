#!/usr/bin/env node
import getopts from "getopts"
import fs from "fs"
import { FileAnalyser } from "./index"

const options = getopts(process.argv.slice(2), {
    alias: {
        "help": "h",
    },
    boolean: ["h"],
    default: {
    },
    string: [],
})

const filenames = options._

const programName = "find-bandwidth-hog"

function help() {
    const message = `
Usage: ${programName} FILENAME...

Does some basic analysis of log files to highlight areas of focus for bandwidth overuse.

    --help              -h  This message
    `
    .replace(/^[ ]+/g, "")
    .replace(/[ ]+$/, "\n\n")
    process.stdout.write(message)
}

if(options["help"]) {
    help()
    process.exit(0)
} else if(!filenames.length) {
    help()
    process.exit(1)
}

const analyser = new FileAnalyser()

async function handleAll() {
    for(const filename of filenames) {
        const fileContents = fs.readFileSync(filename, {encoding: "utf-8"})
        const lines = fileContents.split(/\r?\n/)
        if(lines[lines.length - 1] == "") {
            lines.pop()
        }
        const results = await analyser.analyse(lines)
        console.log(results)
    }
}
handleAll().catch(e => console.error(e))