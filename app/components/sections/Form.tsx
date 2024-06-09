const Form = () => {
  return (
    <div className='flex justify-between'>
      <div></div>
      <div className='bg-[#f9f9f9] p-10 md:w-[40%]'>
        <h3 className='text-[#48687f] text-3xl mb-2'>
          <em>We're Ready to Help. Contact Us to Get Started!</em>
        </h3>
        <span className='text-[#2D2D2D] text-sm'>*Required items marked as asterisks</span>
        <form>
          <div className='sm:col-span-3'>
            <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
              First name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div className='sm:col-span-3'>
            <label htmlFor='first-name' className='block text-sm font-medium leading-6 text-gray-900'>
              First name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
