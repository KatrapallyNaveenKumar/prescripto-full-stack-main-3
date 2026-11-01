
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const { backendUrl } = useContext(AppContext)
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            setLoading(true)

            const { data } = await axios.post(
                backendUrl + '/api/user/forgot-password',
                { email }
            )

            if (data.success) {
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='min-h-[80vh] flex items-center'
        >
            <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>

                <p className='text-2xl font-semibold'>
                    Forgot Password
                </p>

                <p>
                    Enter your registered email to receive a password reset link.
                </p>

                <div className='w-full'>
                    <p>Email</p>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-[#DADADA] rounded w-full p-2 mt-1'
                        placeholder='Enter your email'
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className='bg-primary text-white w-full py-2 rounded-md text-base'
                >
                    {loading ? 'Sending...' : 'Send Reset Link'}
                </button>

                <p
                    onClick={() => navigate('/login')}
                    className='text-primary underline cursor-pointer'
                >
                    Back to Login
                </p>

            </div>
        </form>
    )
}

export default ForgotPassword;

