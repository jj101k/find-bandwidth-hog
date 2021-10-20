import { HTTPLogLine } from "../HTTPLogLine";

/**
 * Compiler for HTTP logs in some format
 */
export abstract class Base {
    /**
     * Compiles a log line into the abstract Line object
     *
     * @param line
     */
    abstract compile(line: string): HTTPLogLine
}