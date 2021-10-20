export class FileAnalyser {
    /**
     *
     * @param lines
     * @returns
     */
    async analyse(lines: AsyncGenerator<string> | string[]): Promise<Map<string, number>> {
        for await (const line of lines) {

        }
        return new Map()
    }
}