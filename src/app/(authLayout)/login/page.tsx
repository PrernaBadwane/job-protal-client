import AuthHeading from '@/Components/AuthComponents/AuthHeading'
import InputFields from '@/Components/Reusable/InputFields/InputFields'
import React from 'react'

const Login = () => {
  return (
    <>
    <AuthHeading heading="Login" />
    <form onSubmit={} className='flex flex-col space-y-5 mt-5'>
      <InputFields
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        defaultValue="text@gmail.com"

        />
    </form>
    </>
  )
}

export default Login