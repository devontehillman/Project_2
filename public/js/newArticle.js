/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
// const blogTitle = $("input#blogTitle");
// const blogText = $("input#blogText");
// const japaneseTrans = $("input#password-input");
// const koreanTrans = $("input#password-input");
// const mandarinTrans = $("input#password-input");
// const spanishTrans = $("input#password-input");
// const frontEnd = $("input#password-input");
// const backEnd = $("input#password-input");
// const saveArticle = $("");

$(document).ready(function() {
  $("#save-article").on("click", function(event) {
    event.preventDefault();
    console.log("click");

    let article = {
      title: $("input#blogTitle"),
      category: $("#frontEnd").prop("checked") ? 1 : 2,
      text: $("input#blogText"),
    };

    $.post("/api/newArticle", article)
      .then(() => {
        window.location.replace("/admin");
        // If there's an error, log the error
      })
      .catch((err) => {
        console.log(err);
      });
  });
});