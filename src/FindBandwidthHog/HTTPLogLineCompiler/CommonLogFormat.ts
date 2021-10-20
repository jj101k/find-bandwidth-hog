import { HTTPLogLine } from "../HTTPLogLine"
import { Base } from "./Base"

/**
 * Line compiler for NCSA Common Log Format (CLF).
 */
export class CommonLogFormat extends Base {
    static matches(line: string) {
        return line.match(/^(\S+) (\S+) (\S+) \[(\S+ [+-]\d+)\] "(\w+) (\S+) HTTP\/([0-9.]+)" (\d+) (\d+)(?:\s|$)/)
    }

    compile(line: string) {
        let md = CommonLogFormat.matches(line)
        if(!md) {
            throw new Error(`Cannot compile strange line "${line}"`)
        }
        return new HTTPLogLine(
            md[1], // host
            // md[2], // ident
            md[3], // HTTP authorization entity
            new Date(md[4]), // timestamp
            md[5], // method
            md[6], // url
            md[7], // HTTP version
            +md[8], // HTTP response code
            +md[9], // Response size
        )
    }
}