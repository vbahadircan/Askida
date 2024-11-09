import React from 'react';

const PersonalInfoForm = ({ formData, handleChange }) => {

  return (
    <form>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Kişisel Bilgiler</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Ödemenizin işleme alınabilmesi için aşağıdaki bilgileri bizimle paylaşmanız gerekmektedir.</p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">İsim</label>
            <div className="mt-2">
              <input 
                id="first-name" 
                name="firstName" 
                type="text" 
                value={formData.firstName} 
                onChange={handleChange} 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Soyisim</label>
            <div className="mt-2">
              <input 
                id="last-name" 
                name="lastName" 
                type="text" 
                value={formData.lastName} 
                onChange={handleChange} 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email adresi</label>
            <div className="mt-2">
              <input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">Telefon Numarası</label>
            <div className="mt-2">
              <input 
                id="phone_number" 
                name="phone_number" 
                type="tel" 
                value={formData.phone_number} 
                onChange={handleChange} 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />
            </div>
          </div>
          <div className="sm:col-span-4">
                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Adres</label>
                <div className="mt-2">
                    <input 
                        id="address" 
                        name="address" 
                        type="text" 
                        value={formData.address} 
                        onChange={handleChange} 
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    />
                </div>
            </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
