import { HTTPLogLine } from "../HTTPLogLine"

/**
 * A class which can analyse HTTP log lines
 */
export abstract class Base {
    /**
     * The analysis results
     */
    abstract results: Map<string, number>

    /**
     * An heuristic for how significant these results seem to be
     */
    abstract significance: number

    /**
     * Store information about a line from the data source
     *
     * @param line
     */
    abstract analyseLine(line: HTTPLogLine): void
}