export class OMDB {
  constructor() {
    this.API_KEY = "8d59b2e9";
    this.URI = `http://www.omdbapi.com/?apikey=${this.API_KEY}`;
    this.FIELD_SEARCH = "Batman"; // Movie title to search for.
    this.FIELD_TYPE = ""; // Type of result to return. (movie/series/episode)
    this.FIELD_YEAR = ""; // Year of release.
    this.FIELD_RETURN_TYPE = "json"; // The data type to return.(json/xml)
    this.FIELD_PAGE = "1"; // Page number to return. (1-100)
    this.FIELD_CALLBACK = ""; // JSONP callback name.
    this.field_VERSION = "1"; // API version (reserved for future use).
  }
}
