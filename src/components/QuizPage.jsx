import React from 'react'

const QuizPage = () => {
    return (
        <ul className='list-disc list-outside max-sm:w-full  max-w-[550px] w-full flex flex-col items-center justify-between gap-4'>
            <li className='text-dark-clr flex flex-col gap-1 text-left items-center'>
                <p className='text-[1rem] font-semibold'>
                    Which best-selling toy of 1983 caused hysteria, resulting in riots breaking in stores?
                </p>
                <div className='flex justify-around w-full'>
                    <button className='text-[10px] font-[500] border-dark-clr border-[1px] px-3 py-1 rounded-lg'>
                        Cabbage Patch Kids
                    </button>
                    <button className='text-[10px] font-[500] border-dark-clr border-[1px] px-3 py-1 rounded-lg'>
                        Cabbage Patch Kids
                    </button>
                    <button className='text-[10px] font-[500] border-dark-clr border-[1px] px-3 py-1 rounded-lg'>
                        Cabbage Patch Kids
                    </button>
                    <button className='text-[10px] font-[500] border-dark-clr border-[1px] px-3 py-1 rounded-lg'>
                        Cabbage Patch Kids
                    </button>
                </div>
            </li>
        </ul>       
    )
}
export default QuizPage
