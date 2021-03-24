// card-text
// UPDATE
const articleTitle = document.querySelectorAll(".btn");
// Set up the event listener for the create button

articleTitle.addEventListener("click", (e) => {
  e.preventDefault();
  // Grabs the id of the element that goes by the name, "id"
  articleTitle.forEach((title) => {
    title = e.target.getAttribute("card-title");
    //   fetch(`/api/article/${title}`, {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     // make sure to serialize the JSON body
    //     body: JSON.stringify(newSleepState),
    //   }).then((response) => {
    //     // Check that the response is all good
    //     // Reload the page so the user can see the new quote
    //     if (response.ok) {
    //       console.log(`changed sleep to: ${newSleep}`);
    //       location.reload("/");
    //     } else {
    //       alert("something went wrong!");
    //     }
    //   });
    console.log(title);
  });
});
