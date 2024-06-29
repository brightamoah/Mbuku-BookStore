import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword
} from 'firebase/auth'
import router from '@/router'

export const useCounterStore = defineStore('counter', () => {

  const name = ref('')
  const email = ref('')
  const phoneNumber = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const next = ref(false)
  const passwordFieldType = ref('password') // Initial password type
  const confirmPasswordFieldType = ref('password') // Initial confirm password type
  const passwordInput = ref(false)
  const confirmPasswordInput = ref(false)

  const nextPage = () => {
    if (name.value && email.value && phoneNumber.value) {
      next.value = !next.value
    } else {
      alert('Please fill all the fields')
    }
  }


  const togglePasswordFieldType = () => {
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password'
  }

  const toggleConfirmPasswordFieldType = () => {
    confirmPasswordFieldType.value =
      confirmPasswordFieldType.value === 'password' ? 'text' : 'password'
  }

  const passwordMatch = computed(() => {
    return password.value === confirmPassword.value
  })

  const passwordLengthValid = computed(() => {
    return password.value.length >= 8
  })

  const logIn = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      console.log('User signed in successfully!')
      console.log(auth.currentUser)
    })
    router.push('/')

    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage.value = 'Invalid Email'
          break

        case 'auth/user-disabled':
          errorMessage.value = 'User Disabled'
          break

        case 'auth/invalid-credential':
          errorMessage.value = 'Wrong Email Or Password'
          break

        case 'auth/user-not-found':
          errorMessage.value = 'No Account With That Email Was Found'
          break

        case 'auth/wrong-password':
          errorMessage.value = 'Wrong Password'
          toast.error('Wrong Password')
          break

        case 'auth/missing-email':
          errorMessage.value = 'No Account With That Email Was Found'
          break

        default:
          errorMessage.value = error.message
          break
      }
    })

    console.table({
      password: password.value,
      email: email.value
    })
    // Reset the form
    password.value = ''
    email.value = ''
  }

  const signUp = () => {
    // Handle the form submission logic


    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user
        const userId = user.uid

        const userData = {
          name: name.value,
          email: email.value,
          phoneNumber: phoneNumber.value,
          password: password.value,
          confirmPassword: confirmPassword.value
        }
        console.table(userData)

        updateProfile(user, {
          displayName: userData.name,
          email: userData.value,
          phoneNumber: userData.value,
          photoURL: userData.photoURL,
        }).then(() => {
          console.log('User profile updated.')
          console.log(auth.currentUser)


          // Reset the form
          name.value = ''
          email.value = ''
          phoneNumber.value = ''
          password.value = ''
          confirmPassword.value = ''
          next.value = false
        })
        console.log(auth.currentUser)
      })


      .catch((error) => {
        console.log(error.code)
        alert(error.message)
      })

  }



  const inputNotEmpty = computed(() => {
    return email.value !== " " && password.value !== " "
  })

  return {
    name,
    email,
    phoneNumber,
    password,
    confirmPassword,
    next,
    passwordFieldType,
    confirmPasswordFieldType,
    passwordInput,
    confirmPasswordInput,
    nextPage,
    signUp,
    logIn,
    togglePasswordFieldType,
    toggleConfirmPasswordFieldType,
    passwordMatch,
    passwordLengthValid,
    inputNotEmpty
  }
})
