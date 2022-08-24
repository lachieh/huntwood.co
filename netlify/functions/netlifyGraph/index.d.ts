/* eslint-disable */
// @ts-nocheck
// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string
}

export type WebhookEvent = {
  body: string
  headers: Record<string, string | null | undefined>
}

export type GraphQLError = {
  path: Array<string | number>
  message: string
  extensions: Record<string, unknown>
}

export type AddToPlaylistInput = {
  uris?: Array<string>
}

export type AddToPlaylist = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    /**
     * The root for Spotify mutations
     */
    spotify: {
      /**
  * Make a REST API call to the Spotify API.

OneGraph will inject the auth params for the API call.

Use this as an escape hatch if OneGraph does not yet support functionality of the underlying API.
  */
      makeRestCall: {
        /**
         * Make a POST request to the Spotify API. Use this as an escape hatch if OneGraph does not yet support functionality of the underlying API.
         */
        post: {
          /**
           * The json-encoded body of the HTTP response. If you need the raw body, use `response.rawBody`.
           */
          jsonBody: unknown
          /**
           * The full response of the API request, including headers and status code.
           */
          response: {
            /**
             * The HTTP status code of the response
             */
            statusCode: number
          }
        }
      }
    }
  }
  /**
   * Any errors from the function will be returned here
   */
  errors?: Array<GraphQLError>
}

/**
 * An empty mutation to start from
 */
export function executeAddToPlaylist(
  variables: AddToPlaylistInput,
  options?: NetlifyGraphFunctionOptions,
): Promise<AddToPlaylist>

export type FindTracksInput = {
  /**
   * The search query's keywords. The search is not case-sensitive: 'roadhouse' will match 'Roadhouse', 'roadHouse', etc. Keywords will be matched in any order unless surrounded by quotes, thus `roadhouse blues` will match both 'Blues Roadhouse' and 'Roadhouse of the Blues'. Quotation marks can be used to limit the match to a phrase: `"roadhouse blues"` will match 'My Roadhouse Blues' but not 'Roadhouse of the Blues'. By default, results are returned when a match is found in any field of the target object type. The asterisk (`*`) character can, with some limitations, be used as a wildcard (maximum: 2 per query). It will match a variable number of non-white-space characters. It cannot be used in a quoted phrase, in a field filter, or as the first character of the keyword string. Searching for playlists will return results matching the playlist's name and/or description.
   */
  query: string
}

export type FindTracks = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    /**
     * The root for Spotify queries
     */
    spotify: {
      search?: {
        tracks?: Array<{
          /**
           * The name of the track.
           */
          name?: string
          /**
           * The Spotify URI for the track.
           */
          uri?: string
          /**
           * A link to the Web API endpoint providing full details of the track.
           */
          href?: string
          /**
           * The track length in milliseconds.
           */
          durationMs?: number
          /**
           * The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
           */
          artists?: Array<{
            /**
             * The name of the artist.
             */
            name?: string
          }>
          /**
           * The album on which the track appears. The album object includes a link in href to full information about the album.
           */
          album?: {
            /**
             * The name of the album. In case of an album takedown, the value may be an empty string.
             */
            name?: string
            /**
             * The cover art for the album in various sizes, widest first.
             */
            images?: Array<{
              /**
               * The image height in pixels. If unknown: `null` or not returned.
               */
              height?: number
              /**
               * The image width in pixels. If unknown: `null` or not returned.
               */
              width?: number
              /**
               * The source URL of the image.
               */
              url?: string
            }>
          }
          /**
           * A link to a 30 second preview (MP3 format) of the track. Can be null
           */
          previewUrl?: string
        }>
      }
    }
  }
  /**
   * Any errors from the function will be returned here
   */
  errors?: Array<GraphQLError>
}

/**
 * An example query to start with.
 */
export function fetchFindTracks(
  variables: FindTracksInput,
  options?: NetlifyGraphFunctionOptions,
): Promise<FindTracks>

export interface Functions {
  /**
   * An empty mutation to start from
   */
  executeAddToPlaylist: typeof executeAddToPlaylist
  /**
   * An example query to start with.
   */
  fetchFindTracks: typeof fetchFindTracks
}

export const functions: Functions

export default functions
