import React from 'react'
import testimonial1 from '../assets/img/avatar-anisha.png'
import testimonial2 from '../assets/img/avatar-ali.png'
import testimonial3 from '../assets/img/avatar-richard.png'


const Testimonials = () => {
  return (
    <section id='testimonials'>
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        {/* Heading */}
            <h2 className='text-4xl font-bold text-center'>
                What's different about manage?
            </h2>
            {/* testimonials Container*/}
            <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
                {/* Testtimonial 1 */}
                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg
                bg-veryLightGray md:w-1/3'>
                    <img src={testimonial1} alt="" className='w-16 -mt-14'/>
                    <h5 className='text-lg font-bold'>Anisha Li</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                        Manage has supercharged our team's workflow. The ability
                        to maintain visibility on larger milestones at all times keeps
                        everyone motivated.
                    </p>
                </div>
                {/* testimonial 2 */}
                <div className='hidden  flex-col items-center p-6 space-y-6 rounded-lg
                bg-veryLightGray md:flex md:w-1/3'>
                    <img src={testimonial2} alt="" className='w-16 -mt-14'/>
                    <h5 className='text-lg font-bold'>Ali Bravo</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                        We have been able to cancel so many other subscriptions
                        since using manage. THere is no more cross-channel confusion and
                         everyone is much more focused.
                    </p>
                </div>
                {/* testtimonial 3 */}
                <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg
                bg-veryLightGray md:flex md:w-1/3'>
                    <img src={testimonial3} alt="" className='w-16 -mt-14'/>
                    <h5 className='text-lg font-bold'>Richard Watts</h5>
                    <p className='text-sm text-darkGrayishBlue'>
                        Manage has supercharged our team's workflow. The ability
                        to maintain visibility on larger milestones at all times keeps
                        everyone motivated.
                    </p>
                </div>
            </div>
            {/* Button */}
            <div className='my-16'>
                <a href="" className='p-3 px-6 pt-2 text-white bg-brightRed
                rounded-full baseline hover:bg-brightRedLight'>
                    Get Started
                </a>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
