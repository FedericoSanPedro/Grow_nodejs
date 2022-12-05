import jwt from "jsonwebtoken";

const verifyMiddle = {};

verifyMiddle.verifyToken = (req, res, next) => {
  const authorization = req.get('authorization')
  let token = ''

  if(authorization && authorization.toLowerCase().startsWith('bearer')){
    token = authorization.substring()
  }

  let decodedToken = {};

  decodedToken = jwt.verify(token, process.env.SECRET)

  if(!token || !decodedToken.id){
    return res.status(401).json({error: 'token missing or invalid'})
  }else{
    res.json({
      mensaje: "User verify",
      authData: authData
    })
  }
  next();
}

export { verifyMiddle };


   /* otro ejemplo

  app.post("/api/orders", verifyToken, (req,res) =>{
    jwt.verify(req.token, process.env.SECRET, (error,authData) =>{
        if(error){
          res.sendStatus(403);
        }else{
          res.json({
            mensaje: "Post creado",
            authData: authData
          })
        }
  });
  });


    funtion verifyToken(req, res, next){
      const bearerHeader = req.headers['authorization'];
      if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1]; // Limpia el Bearer, dejando solo el token a disposicion
        req.token = bearerToken;
        next();
      }
      else{
        res.sendStatus(403);
      }
    }

   */