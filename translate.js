const fetch = require("node-fetch");

module.exports = (text, source, target) => {
  // translate and return the text
  const body = {
    q: text,
    source: source,
    target: target,
    format: "text"
  };

  return new Promise((resolve) => {
    fetch(
      "https://translation.googleapis.com/language/translate/v2?key="+process.env.GAPI_KEY,
      {
        method: "post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(res => res.json())
      .then(json => {
        resolve(json.data.translations[0].translatedText);
      })
      .catch(err => {
        console.log(err);
        resolve("No Translation Available");
      });
  });
};
