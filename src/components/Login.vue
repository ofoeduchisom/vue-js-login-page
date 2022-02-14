<template>
     <div class="container">
        <form @submit.prevent="onSubmit">
            <!-- <form id="form"> -->
            <div class="title">User Login</div>
            <div>
                <label for="username">Email</label>
                <input type="text" v-model="email" placeholder="Enter Email" required/>
            </div> 
            <div>
                <label for="password">Password</label>
                
                <input type="password" v-model="password" placeholder="Enter Password" required/>
                
             </div>
             
                          <button type="submit" id="submit">login</button>
            

        </form>
    </div>
</template>

<script>
export default {
  name: "Login",
  data()
  {
      return {
          email:'',
          password:''
      }
  },
  methods:{
    
      onSubmit()
      {
          console.log("login",this.email,this.password)
  }
  }
}

async function getData() {
    try {
let response = await fetch('https://api-dashboard.enumeration.africa/swagger/index.html');
this.email,this.password = await response.json();
    }catch (error) {
        console.log(error);
    }

},
 created() {
     this.getData();
 
 };

 </script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

body{
    font-family: sans-serif;
    background-color: black;
    position: relative;
}

form{
    width: 400px;
    box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.1);
    padding: 50px;
    margin:  20vh auto 0 auto;
    border-radius: 4px;
    font-size: 15px;
    background-color: white;
}



.title{
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
}

form div input {
    width: 100%; 
    height: 40px;
    border-radius: 8px;
    outline: none;
    border: 2px solid gray;
    padding: 0 30px;
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.1);
}

label {
    display: block;
    margin-bottom: 5px; 
    
}

form div {
    position: relative;
    margin-bottom: 15px;
}

input:focus{
    border: 2px solid black;
}

form div i {
    position: absolute;
    padding: 10px;

}

.error {
    font-size: 14.5px;
    margin-top: 5px;
    color: red;
}

button {
    margin-top: 15px;
    width: 100%;
    height: 45px;
    background-color: black;
    border: 2px solid black;
    border-radius: 8px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    transition: all 0.1s ease;

}

button:hover {
    opacity: 0.8;
}

</style>