const express = require('express')
const app = express()
const port = 3000


let dbUsers = [
  {
    username: "yee cinn",
    password: "123456",
    email:"kobe0@gmail.com"
},{
  username: "gg",
  password: "34343",
  email:"wee0@gmail.com"
},{
  username: "nononn",
  password: "whatthe",
  email:"beee0@gmail.com"
}]



  app.get('/bye', (req, res) => {
    res.send('byebye world')
  })

  app.get('/cinn', (req, res) => {
    res.send('Hi cinn')
  })

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  //must write to decode the json file
  app.use(express.json());

  app.post('/', (req, res) => {
    let data = req.body;
    //JSON.stringify(data)
    // res.send('Post request' + data.username);
    //res.send(' Post request' + JSON.stringify(data))
    res.send(
        login(
          data.username,
          data.password
        )
    )  
  })


  // create a post route for user to login
  app.post('/login', (req, res) => {
    //get username and password
    const {username, password} = req.body;

    // check whether it match the database
    const user = dbUsers.find(user=> user.username === username && user.password === password);

    //assign functional based on the database committed
    if(user){
      res.send(user);
    }else{
      res.send({ error: "User not found"});
    }
  })


  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


  function login(username, password){
    console.log("Someone try to login with", username, password)
    let matched = dbUsers.find(Element=>
        Element.username == username
    )
    if(matched){
        if(matched.password==password){
            return matched
        }else{
            return "password is not matched"
        }
    }else{
        return "username not found"
    }

}

function register(newusername, newpassword, newemail){
  //todo: check if username exist
  let matched = dbUsers.find(Element=>
      Element.username == newusername
  )
  if(matched){
    // will not show in the client but in the server
      console.log("Username exist");
    //will show to the client
      return "username exist"
  }else{
          dbUsers.push({
              username: newusername,
              password: newpassword,
              email: newemail
          })
          console.log("push successfully");
          return "success"   
      }

 
}

app.post('/register', (req, res) => {
  let data = req.body
  res.send(
      register(
        data.x,
        data.y,
        data.z
      )
  )  
});