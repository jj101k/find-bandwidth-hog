import { URL } from "url"

/**
 * This represents a line of a log, whatever its underlying format.
 */
export class HTTPLogLine {
    /**
     *
     */
    public url: URL

    /**
     *
     * @param host
     * @param user
     * @param timestamp
     * @param method
     * @param url
     * @param httpVersion
     * @param httpResponseCode
     * @param responseSize
     */
    constructor(
        public host: string,
        public user: string,
        public timestamp: Date,
        public method: string,
        url: string,
        public httpVersion: string,
        public httpResponseCode: number,
        public responseSize: number,
    ) {
        this.url = new URL(url, "https://localhost/")
    }
}