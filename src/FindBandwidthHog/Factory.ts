import * as Analyser from "./Analyser"
import * as HTTPLogLineCompiler from "./HTTPLogLineCompiler"

/**
 * Factories to return the objects usable for analysis
 */
export class Factory {
    /**
     *
     */
    private analyserClasses: {new(): Analyser.Base}[] = [
        Analyser.Path
    ]

    /**
     *
     */
    private HTTPLogLineCompiler: HTTPLogLineCompiler.Base | null = null

    /**
     *
     */
    private lineCompilerClasses: {matches(line: string): RegExpMatchArray | null, new(): HTTPLogLineCompiler.Base}[] = [
        HTTPLogLineCompiler.CommonLogFormat
    ]


    /**
     *
     * @returns
     */
    getAnalysers() {
        return this.analyserClasses.map(
            c => new c()
        )
    }

    /**
     *
     * @param line
     * @returns
     */
    getLineCompiler(line: string) {
        if(!this.HTTPLogLineCompiler) {
            for(const c of this.lineCompilerClasses) {
                if(c.matches(line)) {
                    this.HTTPLogLineCompiler = new c()
                    break
                }
            }
            if(!this.HTTPLogLineCompiler) {
                throw new Error(`No line compiler matches "${line}"`)
            }
        }
        return this.HTTPLogLineCompiler
    }
}