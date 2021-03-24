$(document).ready(function() {
// card-text
// UPDATE
const articleTitle = $(".card-title");
const articleBody = $(".card-text")
// Set up the event listener for the create button

articleTitle.click(function(event) {
  
  const title = $(this).text()
  if (title == null) {
    console.log($(this).text());
    console.log("title is null")
  }else{
    console.log($(this).text());
    location.assign(`/api/article/${title}`);
  }
  
  
});
});