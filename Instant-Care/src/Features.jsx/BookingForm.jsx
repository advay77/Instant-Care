// import React, { useState } from 'react';
// import { User, Phone, AlertCircle, Hospital2, Calendar, Users } from 'lucide-react';

// function BookingForm({ selectedHospital, onSubmit }) {
//   const [formData, setFormData] = useState({
//     patientName: '',
//     age: 0,
//     gender: '',
//     contact: '',
//     emergency: '',
//     selectedHospital: selectedHospital?.name || '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="space-y-4">
//         <div className="relative">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Patient Name
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <User className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               name="patientName"
//               required
//               className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               value={formData.patientName}
//               onChange={handleChange}
//               placeholder="Enter patient's full name"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Age
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Calendar className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="number"
//                 name="age"
//                 required
//                 min="0"
//                 max="150"
//                 className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 value={formData.age || ''}
//                 onChange={handleChange}
//                 placeholder="Age"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Gender
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Users className="h-5 w-5 text-gray-400" />
//               </div>
//               <select
//                 name="gender"
//                 required
//                 className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 value={formData.gender}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Contact Number
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Phone className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="tel"
//               name="contact"
//               required
//               pattern="[0-9]{10}"
//               className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               value={formData.contact}
//               onChange={handleChange}
//               placeholder="10-digit mobile number"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Emergency Description
//           </label>
//           <div className="relative">
//             <div className="absolute top-3 left-3 pointer-events-none">
//               <AlertCircle className="h-5 w-5 text-gray-400" />
//             </div>
//             <textarea
//               name="emergency"
//               required
//               rows={3}
//               className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               value={formData.emergency}
//               onChange={handleChange}
//               placeholder="Briefly describe the emergency situation"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Selected Hospital
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Hospital2 className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               readOnly
//               className="pl-10 block w-full rounded-md border-gray-300 bg-gray-50 text-gray-500"
//               value={selectedHospital?.name || 'Please select a hospital from the map'}
//             />
//           </div>
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={!selectedHospital}
//         className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
//       >
//         <AlertCircle className="h-5 w-5" />
//         Book Emergency Bed
//       </button>
//     </form>
//   );
// }

// export default BookingForm;




import React, { useState } from 'react';
import { User, Phone, AlertCircle, Building2, Calendar, Users } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import

function BookingForm({ selectedHospital, onSubmit }) {
  const [formData, setFormData] = useState({
    patientName: '',
    age: 0,
    gender: '',
    contact: '',
    emergency: '',
    selectedHospital: selectedHospital?.name || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label className="form-label">Patient Name</label>
        <div className="input-group">
          <span className="input-group-text">
            <User className="h-5 w-5 text-secondary" />
          </span>
          <input
            type="text"
            name="patientName"
            required
            className="form-control"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Enter patient's full name"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Age</label>
          <div className="input-group">
            <span className="input-group-text">
              <Calendar className="h-5 w-5 text-secondary" />
            </span>
            <input
              type="number"
              name="age"
              required
              min="0"
              max="150"
              className="form-control"
              value={formData.age || ''}
              onChange={handleChange}
              placeholder="Age"
            />
          </div>
        </div>

        <div className="col-md-6">
          <label className="form-label">Gender</label>
          <div className="input-group">
            <span className="input-group-text">
              <Users className="h-5 w-5 text-secondary" />
            </span>
            <select
              name="gender"
              required
              className="form-select"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Contact Number</label>
        <div className="input-group">
          <span className="input-group-text">
            <Phone className="h-5 w-5 text-secondary" />
          </span>
          <input
            type="tel"
            name="contact"
            required
            pattern="[0-9]{10}"
            className="form-control"
            value={formData.contact}
            onChange={handleChange}
            placeholder="10-digit mobile number"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Emergency Description</label>
        <div className="input-group">
          <span className="input-group-text">
            <AlertCircle className="h-5 w-5 text-secondary" />
          </span>
          <textarea
            name="emergency"
            required
            rows={3}
            className="form-control"
            value={formData.emergency}
            onChange={handleChange}
            placeholder="Briefly describe the emergency situation"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Selected Hospital</label>
        <div className="input-group">
          <span className="input-group-text">
            <Building2 className="h-5 w-5 text-secondary" />
          </span>
          <input
            type="text"
            readOnly
            className="form-control bg-light text-muted"
            value={selectedHospital?.name || 'Please select a hospital from the map'}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!selectedHospital}
        className="btn btn-primary w-100"
      >
        <AlertCircle className="h-5 w-5 me-2" />
        Book Emergency Bed
      </button>
    </form>
  );
}

export default BookingForm;