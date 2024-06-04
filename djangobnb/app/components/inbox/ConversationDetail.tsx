'use client'
import React from 'react'
import CustomButton from '../forms/CustomButton'

const ConversationDetail = () => {
  return (
    <>
        <div className='max-h-[400px] overflow-auto flex flex-col space-y-4'>
            <div className='w-[80%] py-4 px-6 rounded-xl bg-gray-200'>
                <p className='font-bold text-gray-500'>
                    John Doe
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200'>
                <p className='font-bold text-gray-500'>
                    Code with Kizzy
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>

        <div className='mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-lg'>
            <input type="text"
                placeholder='Type a message'
                className='w-full p-2 rounded-xl bg-gray-300'
            />

            <CustomButton
            label='send'
            onClick={() => console.log("testing") }
            className='w-[100px] text-center'
            />

        </div>
    </>
  )
}

export default ConversationDetail
