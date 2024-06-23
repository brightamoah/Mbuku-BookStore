import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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
    console.table({
      name: name.value,
      email: email.value,
      phoneNumber: phoneNumber.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    })
    // Reset the form
    name.value = ''
    email.value = ''
    phoneNumber.value = ''
    password.value = ''
    confirmPassword.value = ''
    next.value = false
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
