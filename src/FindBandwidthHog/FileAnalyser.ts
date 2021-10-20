import * as Analyser from "./Analyser"
import { Factory } from "./Factory"

/**
 * Objects of this type can analyse a whole file and return the results.
 */
export class FileAnalyser {
    /**
     *
     * @param lines
     * @returns
     */
    async analyse(lines: AsyncGenerator<string> | string[]): Promise<Map<string, number>> {
        const factory = new Factory()
        const analysers = factory.getAnalysers()
        for await (const line of lines) {
            const compiler = factory.getLineCompiler(line)
            const compiledLine = compiler.compile(line)
            for(const analyser of analysers) {
                analyser.analyseLine(compiledLine)
            }
        }
        const bestAnalyser = analysers.reduce(
            (c: Analyser.Base | null, i) => (c?.significance ?? -1) < i.significance ? i : c,
            null
        )
        if(bestAnalyser) {
            return bestAnalyser.results
        } else {
            return new Map()
        }
    }
}