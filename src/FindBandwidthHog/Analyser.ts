export class Analyser {
    async analyse(lines: AsyncGenerator<string> | string[]) {
        const results: any[] = []
        for await (const line of lines) {

        }
        return results
    }
}