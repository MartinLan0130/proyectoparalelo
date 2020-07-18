const express = require ("express")
const app = express ()
app.use( express.static("public"))

app.listen(4000,()=>(console.log("Escuho en puerto 4000")))

app.get("/", function(req,res){res.sendFile(__dirname + "/index.html")})

app.get ("/registerlogin", (req,res)=>(res.sendFile(__dirname + "/loginregister.html")));


