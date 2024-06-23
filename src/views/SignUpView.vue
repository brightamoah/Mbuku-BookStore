<template>
  <NavbarComponent />
  <div class="login-container">
    <div>
      <img class="logo" src="/images/mbuku.logo.png" alt="mbuku-logo" />
      <p class="welcome-txt" id="wel-txt">Welcome to Mbuku!</p>
      <p class="welcome-txt">Please sign up below</p>
    </div>

    <form class="input-field" @submit.prevent="useAuth.signUp">
      <div class="first-section" v-if="!useAuth.next">
        <input class="input" type="text" id="namebox" v-model="useAuth.name" placeholder="Name" required />
        <input
          class="input"
          type="tel"
          id="phone"
          v-model="useAuth.phoneNumber"
          placeholder="Your Phone Number"
        />

        <input
          class="input"
          type="email"
          id="emailbox"
          v-model="useAuth.email"
          placeholder="Email"
          required
        />

        <button type="button" class="next-button" @click="useAuth.nextPage">Next</button>
      </div>

      <div class="second-section" v-else>
        <div class="password-container">
          <input
            class="input"
            id="passwordbox"
            :type="useAuth.passwordFieldType"
            v-model="useAuth.password"
            placeholder="Password"
            autocomplete="off"
            @input="useAuth.passwordInput = true"
            required
          />

          <div class="error-message" v-if="useAuth.passwordInput && !useAuth.passwordLengthValid">
            password must be at least 8 characters long
          </div>

          <button type="button" class="show-password-btn" @click="useAuth.togglePasswordFieldType">
            <span v-if="useAuth.passwordFieldType === 'password'"
              ><img class="show-icon" src="/icons/view.png"
            /></span>
            <span v-else><img class="show-icon" src="/icons/invisible.png" /></span>
          </button>
        </div>

        <br />

        <div class="password-container">
          <input
            class="input"
            id="confirmPasswordbox"
            :type="useAuth.confirmPasswordFieldType"
            v-model="useAuth.confirmPassword"
            placeholder="Confirm Password"
            autocomplete="off"
            @input="useAuth.confirmPasswordInput = true"
            required
          />

          <div v-if="useAuth.confirmPasswordInput && !useAuth.passwordMatch" class="error-message">
            Confirm password does not match password
          </div>

          <button type="button" class="show-password-btn" @click="useAuth.toggleConfirmPasswordFieldType">
            <span v-if="useAuth.confirmPasswordFieldType === 'password'"
              ><img class="show-icon" src="/icons/view.png"
            /></span>
            <span v-else><img class="show-icon" src="/icons/invisible.png" /></span>
          </button>
        </div>
        <br />

        <button class="submit-btn" type="submit" :disabled="!useAuth.passwordMatch || !useAuth.passwordLengthValid">
          Sign Up
        </button>
      </div>

      <!-- <div class="subsec">
        <div class="checkbox-sec">
          <label class="checkbox-txt" for="checkbox"
            >Remember me <input class="checkbox" id="checkbox" type="checkbox" />

            <span class="checkbox-container"></span>
          </label>
        </div>
      </div> -->

      <div>
        <div class="or">OR</div>
        <button class="signin-google">
          <img class="google-img" src="/icons/google.png" /><span class="google-txt"
            >Sign In With Google</span
          >
        </button>

        <p class="question">
          Already have an account?
          <RouterLink to="/login" style="text-decoration: none"
            ><span class="link">Login</span></RouterLink
          >
        </p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SignUpView'
}
</script>

<script setup>
import { useCounterStore } from '@/stores/counter'
// import { ref, computed } from 'vue'
// import NavbarComponent from '@/components/NavbarComponent.vue'

const useAuth = useCounterStore()
// const name = ref('')
// const email = ref('')
// const phoneNumber = ref('')
// const password = ref('')
// const confirmPassword = ref('')
// const next = ref(false)
// const passwordFieldType = ref('password') // Initial password type
// const confirmPasswordFieldType = ref('password') // Initial confirm password type
// const passwordInput = ref(false)
// const confirmPasswordInput = ref(false)

// const nextPage = () => {
//   if (name.value && email.value && phoneNumber.value) {
//     next.value = !next.value
//   } else {
//     alert('Please fill all the fields')
//   }
// }

// const togglePasswordFieldType = () => {
//   passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password'
// }

// const toggleConfirmPasswordFieldType = () => {
//   confirmPasswordFieldType.value =
//     confirmPasswordFieldType.value === 'password' ? 'text' : 'password'
// }

// const passwordMatch = computed(() => {
//   return password.value === confirmPassword.value
// })

// const passwordLengthValid = computed(() => {
//   return password.value.length >= 8
// })

// const handleSubmit = () => {
//   // Handle the form submission logic
//   console.table({
//     name: name.value,
//     email: email.value,
//     phoneNumber: phoneNumber.value,
//     password: password.value,
//     confirmPassword: confirmPassword.value
//   })

//   // Reset the form
//   name.value = ''
//   email.value = ''
//   phoneNumber.value = ''
//   password.value = ''
//   confirmPassword.value = ''
//   next.value = false
// }
</script>
<style scoped>
.login-container {
  width: 30rem;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 5rem;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
  width: 50%;
  height: 3rem;
  border: 1px solid #ff6347;
  border-radius: 5px;
  margin-left: 25%;
  margin-right: 10%;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background-color: #ff6347;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.submit-btn:hover {
  transform: scale(1.05, 1.05) translate3d(0, 0, 0);
}
.question {
  margin-left: 23%;
  margin-top: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
.link {
  color: #ff6347;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
}

RouterLink {
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
  font-weight: 700;
}

.error-message {
  font-size: 12px;
  color: red;
  margin-left: 15%;
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
  color: rgbq(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}

.signin-google:hover {
  transform: scale(1.05, 1.05) translate3d(0, 0, 0);
}

.or {
  font-size: 1rem;
  font-weight: 500;
  margin-left: 45%;
  color: #000;
}

.google-img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-top: 5px;
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
  transition: 0.5s ease all;
  transform: translate(20deg);
}

.next-button {
  width: 50%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff6347;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  background-color: #ff6347;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  border-radius: 5px;
}
</style>
