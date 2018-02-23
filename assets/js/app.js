var api = "89c67b32abfd4b3ba73d84fee6436436";
var search = "basketball";
var beginDate = "20160101";
var endDate = "20171231";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + "?q=" + search + "&begin_date=" + beginDate + "&end_date=" + endDate + "&api_key=" + api;
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
})