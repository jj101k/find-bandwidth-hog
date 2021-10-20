import { HTTPLogLine } from "../HTTPLogLine"
import { Base } from "./Base"

/**
 *
 */
export class Path extends Base {
    results = new Map<string, number>()
    significance = 0

    analyseLine(line: HTTPLogLine): void {
        const existing = this.results.get(line.url.pathname) ?? 0
        const newValue = existing + 1
        this.results.set(line.url.pathname, newValue)
        if(newValue > this.significance) {
            this.significance = newValue
        }
    }
}