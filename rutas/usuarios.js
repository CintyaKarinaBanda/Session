var ruta=require("express").Router();

ruta.get("/",(req, res)=>{
    res.render("inicio");
});

ruta.get("/login",(req, res)=>{
    res.render("login");
});

ruta.post("/validar",(req, res)=>{
    if(req.body.usuario=="Holi" && req.body.password=="password"){
        req.session.usuario=req.body.usuario;
        res.redirect("/bienvenido");
    }
    else{
        res.redirect("/error");
    }
});

ruta.get("/bienvenido",(req, res)=>{
    if(req.session.usuario){
        res.render("bienvenido",{usuario:req.session.usuario});
    }
    else{
        res.redirect("/error");
    }
});

ruta.get("/error",(req, res)=>{
    res.render("error");
});

ruta.get("/logout",(req, res)=>{
    req.session.destroy();
    req.redirect("login");
});

ruta.get("/protegido",(req, res)=>{
    res.render("protegido" ,{usuario:req.session.usuario});
});

module.exports=ruta;