import { infoType } from '@/app/constants/home'

function Info(info: infoType) {
  return (
    <section className={`${info.bg} ${info.color} text-center py-24`}>
      <div className='container mx-auto'>
        <div className='px-60'>
          <h3 className='text-4xl italic mb-1'>{info.h3}</h3>
          <h4 className='text-3xl italic mb-3'>{info.h4}</h4>
          <article>
            <p className='text-xl leading-sung mb-6'>{info.article}</p>
          </article>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <button className='px-9 h-[50px] min-w-[255px] border'>FIND YOUR COMMUNITY</button>
          <button className='px-9 h-[50px] min-w-[255px] border'>CONTACT US</button>
        </div>
      </div>
    </section>
  )
}

export default Info
