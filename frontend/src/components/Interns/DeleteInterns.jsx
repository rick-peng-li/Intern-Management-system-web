import React, { useState } from 'react'

const DeleteInterns = () => {

    const [interns, setInterns] = useState([
        {
            id: 1,
            name: "Ayesha",
            department: "MERN Stack"
        },

        {
            id: 2,
            name: "Ali",
            department: "Graphic Design"
        },

        {
            id: 3,
            name: "Sara",
            department: "Web Development"
        }
    ])

    const handleDelete = (id) => {

        const filteredInterns = interns.filter(
            (intern) => intern.id !== id
        )

        setInterns(filteredInterns)
    }

    return (

        <div className='p-6'>

            <h1 className='text-3xl font-bold mb-6'>
                Delete Interns
            </h1>

            <div className='bg-white rounded-xl shadow-md overflow-hidden'>

                <table className='w-full'>

                    <thead className='bg-gray-200'>

                        <tr>
                            <th className='p-4 text-left'>ID</th>
                            <th className='p-4 text-left'>Name</th>
                            <th className='p-4 text-left'>Department</th>
                            <th className='p-4 text-left'>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {interns.map((intern) => (

                            <tr
                                key={intern.id}
                                className='border-b'
                            >

                                <td className='p-4'>
                                    {intern.id}
                                </td>

                                <td className='p-4'>
                                    {intern.name}
                                </td>

                                <td className='p-4'>
                                    {intern.department}
                                </td>

                                <td className='p-4'>

                                    <button
                                        onClick={() => handleDelete(intern.id)}
                                        className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default DeleteInterns