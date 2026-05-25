import React, { useEffect, useState } from "react"
import axios from "axios"

const Interns = () => {

  const [interns, setInterns] = useState([])

  useEffect(() => {

    const fetchInterns = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/intern"
        )

        setInterns(response.data.interns)

      } catch (error) {
        console.log(error)
      }

    }

    fetchInterns()

  }, [])

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        All Interns
      </h1>

      <table className="w-full border">

        <thead className="bg-gray-200">

          <tr>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Department</th>
          </tr>

        </thead>

        <tbody>

          {interns.map((intern) => (

            <tr key={intern._id}>

              <td className="p-3 border">
                {intern.name}
              </td>

              <td className="p-3 border">
                {intern.email}
              </td>

              <td className="p-3 border">
                {intern.department}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default Interns