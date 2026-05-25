import React, { useState } from 'react'
import axios from 'axios'

const AddInterns = () => {

    const [intern, setIntern] = useState({

        name: "",
        email: "",
        department: ""

    })

    const handleChange = (e) => {

        setIntern({

            ...intern,
            [e.target.name]: e.target.value

        })

    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        console.log(intern)

        try {

            const response = await axios.post(

                "http://localhost:5000/api/intern/add",

                intern

            )

            console.log(response.data)

            alert("Intern Added Successfully")

        }

        catch (error) {

            console.log(error)

        }

    }

    return (

        <div className='p-6'>

            <div className='bg-white p-6 rounded-xl shadow-md w-full max-w-lg'>

                <h1 className='text-2xl font-bold mb-6'>
                    Add Intern
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type='text'
                        name='name'
                        placeholder='Enter Name'
                        onChange={handleChange}
                        className='border p-3 w-full mb-4 rounded'
                    />

                    <input
                        type='email'
                        name='email'
                        placeholder='Enter Email'
                        onChange={handleChange}
                        className='border p-3 w-full mb-4 rounded'
                    />

                    <input
                        type='text'
                        name='department'
                        placeholder='Enter Department'
                        onChange={handleChange}
                        className='border p-3 w-full mb-4 rounded'
                    />

                    <button
                        type='submit'
                        className='bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600'
                    >
                        Add Intern
                    </button>

                </form>

            </div>

        </div>

    )
}

export default AddInterns