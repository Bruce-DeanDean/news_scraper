// Grab the articles as a json
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
  });
  
  

  
    // Now make an ajax call for the Article
    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })
      // With that done, add the note information to the page
      .then(function(data) {
        console.log(data);
        // The title of the article
      })
    // Run a POST request to change the note, using what's entered in the inputs
    // $.ajax({
    //   method: "POST",
    //   url: "/articles/" + thisId,
    //   data: {
    //     // Value taken from title input
    //     title: $("#titleinput").val(),
    //     // Value taken from note textarea
    //     body: $("#bodyinput").val()
    //   }
    // })
    //   // With that done
    //   .then(function(data) {
    //     // Log the response
    //     console.log(data);

    //   });
  
    // Also, remove the values entered in the input and textarea for note entry
    // $("#titleinput").val("");
    // $("#bodyinput").val("");
  
  