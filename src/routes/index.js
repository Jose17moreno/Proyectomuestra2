const express = require("express");
const router = express.Router();
//rutas
router.get("/", (req, res) => {
    res.render("index.html", { title: "First WebSite NodeJs"});
});


router.get("/contact", (req, res) => {
    res.render("contact.html", { title: "JS para crear mas rutas"});
});




module.exports = router;
