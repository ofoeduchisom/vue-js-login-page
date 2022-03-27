<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <!-- <form id="form"> -->
      <div class="title">User Login</div>
      <div>
        <label for="username">Username</label>
        <input type="text" v-model="username" placeholder="Enter Username" required />
      </div>
      <div>
        <label for="password">Password</label>

        <input
          type="password" v-model="password" placeholder="Enter Password" required />
      </div>

      <button type="submit" id="submit">login</button>
    </form>
  </div>
</template>

<script>
// import { useRouter } from 'vue-router';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      client_id:"ReactServer",
      client_secret:"secretsecret",
      grant_type:"password",
      scope: "GISProject.Web.ServerAPI"

    };
  },
  methods: {
    async onSubmit() {
      const formData = new URLSearchParams()
      formData.append('username',this.username)
      formData.append('password',this.password)
      formData.append('client_id',this.client_id)
      formData.append('client_secret',this.client_secret)
      formData.append('grant_type',this.grant_type)
      formData.append('scope',this.scope)

         try {
          let response = await fetch("https://api-dashboard.enumeration.africa/connect/token",
            {
              method: 'POST',
              headers: {
                 'Accept': 'application/json text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              
              //  body: JSON.stringify({email: this.email, password: this.password})
              body: formData

            }
            
          );
          if (response.status===200){
            console.log(response)
            this.$router.push('/Profile');
          }
        } catch (error) {
          console.log(error);
        }
 }
  },
};





</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: black;
  position:relative;

}

form {
  width: 400px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 50px;
  margin: 20vh auto 0 auto;
  border-radius: 4px;
  font-size: 15px;
  background-color: white;
  display: inline-block;
  
}

.title {
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
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 5px;
}

form div {
  position: relative;
  margin-bottom: 15px;
}

input:focus {
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
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.1s ease;
}

button:hover {
  opacity: 0.8;
}
</style>
