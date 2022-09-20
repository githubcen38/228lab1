const exp = require("express");
const app = exp();

function test(req,res,next) {

    console.log("Hello test")
    next();
}
app.use(test);

//http://localhost:8080/
app.get("/", function(req,res) {
    res.send("Home Page");
});
//http://localhost:8080/about_us

app.get("/about_us", function(req,res) {
    res.send("About Us Page");
})

//http://localhost
app.get("/products", function(req,res) {
    res.send("Products");

})
app.post("/login", function(req,res) {

});
app.use("/home", function(req,res) {
    res.send("Home2");
})

app.use(function(req,res) {
    req.send("Page not found");
})

//http:localhost:8080
var port = process.env.PORT || 8080;
app.listen(port);