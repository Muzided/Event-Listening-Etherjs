import React, { useState } from 'react';

const LoginForm = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log(`Email: ${email} Password: ${password}`);
      // Send the email and password to the server for authentication
    }
   
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-300 to-purple-800">
          <div className="max-w-md w-full bg-purple-300 p-8 shadow-md transform transition-all duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-purple-200  focus:outline-none focus:shadow-outline" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-purple-200 focus:outline-none focus:shadow-outline" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            </form>
          </div>
        </div>
      );
}

export default LoginForm;