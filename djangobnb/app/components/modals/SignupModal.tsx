'use client'


import React from 'react'
import Modal from './Modal';
import CustomButton from '../forms/CustomButton';
import useSignupModal from '@/app/hooks/useSignupModal';

const SignupModal = () => {

  const SignupModal = useSignupModal();
  const content = (
    <>
      {/* <h2 className='mb-6 text-2xl'>Welcome to Kunle's App, Please Log in</h2> */}
      <form className='space-y-4'>
          <input placeholder="Your email address" type="email" className='w-full px-4 h-[54px] border border-gray-300 rounded-xl' />
          <input placeholder="Your password" type="password" className='w-full px-4 h-[54px] border border-gray-300 rounded-xl' />
          <input placeholder="Repeat password" type="password" className='w-full px-4 h-[54px] border border-gray-300 rounded-xl' />
          <div className='p-5 bg-airbnb text-white rounded-xl opacity-80'>
            The error message
          </div>
          <CustomButton label='Submit' onClick={() => console.log('Log in')} />

      </form>
    </>
  )
  return (
    <Modal
      isOpen={SignupModal.isOpen}
      close={SignupModal.close}
      label='Signup'
      content={content}
      />
  )
}

export default SignupModal
