<template>
  <NavbarComponent />
  <div class="login-container">
    <div>
      <img class="logo" src="/images/mbuku.logo.png" alt="mbuku-logo" />
      <p class="welcome-txt" id="wel-txt">Welcome To Mbuku!</p>
      <p class="welcome-txt">Please Sign Up below</p>
    </div>

    <form class="input-field" @submit.prevent="handleSubmit">
      <div class="first-section" v-if="!next">
        <input
        v-model="name"
          class="input"
          ref="emailRef"
          type="text"
          id="emailbox"
          placeholder="Name"
          autocomplete="off"
          required
        />
        <input
        v-model="email"
          class="input"
          ref="emailRef"
          type="email"
          id="emailbox"
          placeholder="Email"
          autocomplete="off"
          required
        />
        <input
        v-model="phoneNumber"
          class="input"
          ref="emailRef"
          type="tel"
          id="emailbox"
          placeholder="Phone Number"
          autocomplete="off"
          required
        />
        <button type="button" class="submit-btn"  @click="nextPage">Next</button>
        
      </div>
      
      <!-- <input
        class="input"
        ref="emailRef"
        type="email"
        id="emailbox"
        placeholder="Email"
        autocomplete="off"
        required
      /> -->

        <div class="second-section" v-else>
            <div class="password-container">
        <input
        v-model="password"
          class="input"
          type="password"
          id="passwordbox"
          placeholder="Enter Your Password"
          autocomplete="off"
          required
          style="margin-bottom: 10px"
        />
        <br />
        <input
          class="input"
          ref="emailRef"
          type="password"
          id="emailbox"
          placeholder="Confirm Password"
          autocomplete="off"
          required
          style="margin-bottom: 10px"
        />

        <!-- <button @click="authStore.togglePasswordFieldType" type="button" class="show-password-btn">
          <span v-if="authStore.passwordFieldType === 'password'"
            ><img class="show-icon" src="/icons/view.png"
          /></span>
          <span v-else><img class="show-icon" src="/icons/invisible.png" /></span>
        </button> -->
      </div>

      <div class="subsec">
        <div class="checkbox-sec">
          <label class="checkbox-txt" for="checkbox"
            >Remember me
            <input class="checkbox" id="checkbox" type="checkbox" />
            <span class="checkbox-container"></span>
          </label>
        </div>
        <div>
          <span class="link">Forgot password?</span>
        </div>
      </div>

      <div>
        <button class="submit-btn" type="submit" style="margin-top: 1.2rem">Login</button>

        </div>
        <div class="or">OR</div>

        <button class="signin-google">
          <img class="google-img" src="/icons/google.png" />
          <span class="google-txt">Sign In With Google</span>
        </button>

        <p class="question">
          Already have an account?
          <span class="link">Log In</span>
        </p>
      </div>
    </form>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import NavbarComponent from '@/components/NavbarComponent.vue'


const name = ref('')
const email = ref('')
const phoneNumber = ref('')
const password = ref('')
const next = ref(false)
// const formData = {
//     name: name.value,
//     email: email.value,
//     phoneNumber: phoneNumber.value,
//     password:  password.value
// }

const nextPage = () => {
    if(name.value && email.value && phoneNumber.value){
        next.value = true
    } else {
        alert('Please fill all the fields')
    }
    
}
const handleSubmit = () => {
  // Handle the form submission logic
  console.log('Form submitted')
  console.log("name:",name.value)
  console.log("email:",email.value)
  console.log("phone number:",phoneNumber.value)
  console.log(password.value)
}


</script>

<style scoped>

.login-container {
  width: 30rem;
  height: auto;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.logo {
  width: 10rem;
  height: auto;
  margin-left: 33%;
  margin-right: 15%;
  margin-top: 8px;
  margin-bottom: 1rem;
}
.welcome-txt {
  font-size: 1.2rem;
  text-align: center;
}
#wel-txt {
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
  font-weight: 500;
}
.input-field {
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 30px;
}
.input {
  width: 100%;
  height: 4rem;
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
}

.password-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.show-password-btn {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ff6347;
}

.show-icon {
  width: 20px;
  height: 20px;
}
.subsec {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.checkbox-txt {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 1rem;
}

.checkbox-txt input[type='checkbox'] {
  visibility: hidden;
}

.checkbox-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 1px solid #000;
  margin-top: 5px;
  margin-left: 10px;
}

/* Hover effect
  .checkbox-txt:hover input ~ .checkbox-container {
    background-color: yellow;
  }*/

/* Active effect
  .checkbox-txt input:active ~ .checkbox-container {
    background-color: red;
  }*/

/* Checked effect */
.checkbox-txt input:checked ~ .checkbox-container {
  background-color: #ff6347;
}

/* Checkmark */
.checkbox-container::after {
  content: '';
  position: absolute;
  display: none;
  left: 7px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Display checkmark when checked */
.checkbox-txt input:checked ~ .checkbox-container::after {
  display: block;
}

.submit-btn {
  width: 80%;
  height: 3rem;
  border: 1px solid #ff6347;
  border-radius: 5px;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  background-color: #ff6347;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
.question {
  text-align: center;
  margin-top: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
.link {
  color: #ff6347;
  cursor: pointer;
  text-decoration: none;
}
RouterLink {
    text-decoration: none;
}
.link:hover {
  text-decoration: underline;
  text-decoration-color: ff6347;  
}

.error-message {
  font-size: 13px;
  color: red;
  margin-top: 20px;
  margin-left: 30%;
}

.signin-google {
  width: 50%;
  height: 3rem;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  margin-left: 25%;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.signin-google:hover {
  transform: scale(1.05, 1.05) translate3d(0, 0, 0);
}

.or {
  font-size: 1rem;
  font-weight: 500;
  margin-top: 10px;
  margin-left: 45%;
  color: #000;
}

.google-img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.google-txt {
  font-size: 0.8rem;
  font-weight: 700;
  color: #000;
  padding: 2px;
}
.first-section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 1.2rem;
}
</style>
