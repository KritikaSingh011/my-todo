import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-center'>
        <div className=' m-2 w-3/4 flex justify-between items-center px-3 p-2 bg-blue-300/60 text-white font-bold text-lg'>
            <div className='px-3'>
            <img className='w-10 rounded-full' src="\src\assets\cutelogo.png" alt="" />
                <span className='c'>iTask</span>
            </div>
            <ul className='flex gap-2'>
                <li className=' font-bold hover:text-gray-300 hover:rounded-full p-2 mr-3 text-xl '>Home</li>
                <li className=' font-bold hover:text-gray-300 hover:rounded-full p-2 mr-3  text-xl '>About</li>
            </ul>

        </div>
        </nav>
    )
}

export default Navbar
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/KritikaSingh011/my-todo.git
// git push -u origin main
