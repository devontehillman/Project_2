$(document).ready(function() {
// card-text
// UPDATE
const articleTitle = $(".card-title");
const articleBody = $(".card-text")
// Set up the event listener for the create button

articleTitle.click(function(event) {
  
  console.log($(this).text());
  title = $(this).text()
  
  location.assign(`/api/article/${title}`);
});
});