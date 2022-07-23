export const isEmail =(string) => {
   const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
   return pattern.test(string)
}
//To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
export const isPassword =(string)=> {
   const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
   return passw.test(string)
}

export const validate =(input)=> {
   let error = {
      input: '',
      validate: false,
      message: '',
   }
   if(input.email === ''){
      error.message = 'Please enter email addresss'
      error.validate = false
      error.input = 'email'
      return error
   }
   if(input.email !== '' && !isEmail(input.email)){
      error.message = 'Please enter valid email addresss'
      error.validate = false
      error.input = 'email'
      return error
   }
   if(input.hasOwnProperty('password') && input.password === ""){
      error.message = 'Please enter password'
      error.validate = false
      error.input = 'password'
      return error
   }
   if(input.hasOwnProperty('password') && input.password !== "" && !isPassword(input.password)){
      error.message = 'Please enter valid password'
      error.validate = false
      error.input = 'password'
      return error
   }

   error.message = ''
   error.validate = true
   error.input = ''
   return error
}