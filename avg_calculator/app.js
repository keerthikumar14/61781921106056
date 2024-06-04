const { default: axios } = require("axios");
const express = require("express")
const app= express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const message="Invalid number"
const token={
    "token_type": "Bearer",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3NTAyNzMwLCJpYXQiOjE3MTc1MDI0MzAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjYwMDQ2ZDYzLTVjNDEtNDI4MC04ZmQ0LTU2YjhkNzMyNDBlYyIsInN1YiI6ImtlZXJ0aGlrdW1hci4yMWl0QHNvbmF0ZWNoLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiU29uYSBDb2xsZWdlIE9mIFRlY2hub2xvZ3kiLCJjbGllbnRJRCI6IjYwMDQ2ZDYzLTVjNDEtNDI4MC04ZmQ0LTU2YjhkNzMyNDBlYyIsImNsaWVudFNlY3JldCI6InVQQUNIRnNjY0lzT25BQXAiLCJvd25lck5hbWUiOiJLZWVydGhpIGt1bWFyIFMiLCJvd25lckVtYWlsIjoia2VlcnRoaWt1bWFyLjIxaXRAc29uYXRlY2guYWMuaW4iLCJyb2xsTm8iOiI2MTc4MTkyMTEwNjA1NiJ9.THpujY8nDbwT2VacuEt1pT_k3uJ96eQy2TrZ7fYQ1Nc",
    "expires_in": 1717502730
}
app.get("/numbers/:num_id",async (req,res)=>{
    const num_id=req.params.num_id;
    if(num_id=="p"){
        const response=await axios.get("http://20.244.56.144/test/primes",{
            headers: {
                    "Authorization": `${token.token_type} ${token.access_token}`
                
            }
        });
        console.log(response);
        return res.send(response.data);
    }
    else if(num_id=="f"){
        const response=await axios.get("http://20.244.56.144/test/fibo",{
            headers: {
                    "Authorization": `${token.token_type} ${token.access_token}`
                
            }
        });
        console.log(response);
        return res.send(response.data);
    }
    else if(num_id=="e"){
        const response=await axios.get("http://20.244.56.144/test/even",{
            headers: {
                    "Authorization": `${token.token_type} ${token.access_token}`
                
            }
        });
        console.log(response);
        return res.send(response.data);

    }
    else if(num_id=="r"){
        const response=await axios.get("http://20.244.56.144/test/rand",{
            headers: {
                    "Authorization": `${token.token_type} ${token.access_token}`
                
            }
        });
        console.log(response);
        return res.send(response.data);

    }
    else{
        return res.status(404).json(message);
    }
})

app.listen(9876);