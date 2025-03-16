import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({ username: "", empId: "", receipt: null });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFileChange = (e) => {
      setFormData({ ...formData, receipt: e.target.files[0] });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.username || !formData.empId || !formData.receipt) {
        alert("All fields are required!");
        return;
      }
      console.log("Submitted Data:", formData);
      alert("Form submitted successfully!");
    };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Submit Expense Receipt</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Employee ID</label>
          <input
            type="text"
            name="empId"
            value={formData.empId}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Receipt Attachment</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form;