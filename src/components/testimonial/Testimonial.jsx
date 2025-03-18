import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">This is a good gift shop, very nice collection. Price , I find very reasonable. All the items are displayed in good order. It is really a pleasure to visit this shop!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Abhay</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Delhi, India</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Very humble and down to earth people in this company. They have done a very good job with my order. They strive for maximum customer satisfaction. I am very satisfied with their work. They are leaders in this space. I am happy to recommend them to other prospective customers </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Karthik</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Bangalore, India</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://png.pngtree.com/png-vector/20220210/ourlarge/pngtree-avatar-female-character-mother-png-image_4384454.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">It was amazing, finishing was very perfect... Gift packing is unexpected one... actually I bought it to surprise my husband but I too get surprised 😀😀 thank you soo much!!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sam</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Kolkata, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial