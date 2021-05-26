async function index(req, res) {
  if (req.method == "GET") {
    res.render("home");
  } else if (req.method == "POST") {
  }
}

// Function act as a function cosntructor
//   -- Proposal:
//      - I think it is better to create a Class of this controlelr and pass the io in the class constructor
function send(io) {
  // Notice this function return another function (may be avoided if using Class and Object Constructor)
  //   - assume the inner function is the fucntion that directly written when registering routes
  return async function (req, res) {
    // if Get method render send page
    if (req.method == "GET") {
      res.render("send");

      // if POST method emit socket message
    } else if (req.method == "POST") {
      // HERE Should lay the SQL / Database CRUD
      console.log("Message Recieve at /send using POST Request");

      // Send IO Some how
      const success = io.emit("global_message", req.body.message);
      console.log("Emmit success? ", success);

      // Redirect to sender page
      res.redirect("/send");
    }
  };
}

module.exports = {
  index,
  send,
};
