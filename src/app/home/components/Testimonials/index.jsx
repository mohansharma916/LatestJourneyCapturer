

const Testimonials =() => {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Amit",
            title: "Traveller",
            quote: "Unbelievable! The Journey Capturer gave me the chance to explore places I'd only dreamed of. I'm not a professional content creator, but they paired me with an amazing videographer who captured every moment. Thank you for turning my travel dreams into reality!"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Ankit",
            title: "Traveller",
            quote: "I've always hesitated to pursue my passion for content creation due to financial constraints. The Journey Capturer erased those worries and provided me with the opportunity to travel, learn, and create amazing memories. Forever grateful!."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Geetanjali",
            title: "Traveller",
            quote: "I had this dream of exploring new places. The Journey Capturer(TJC) heard that dream and made it happen. They said, 'Go, have fun, and we'll handle the bills.' Now my pics are making others want to go too!"
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                   See  What our Journey Travellers say about us
                    </h3>
                    {/* <p className="mt-3 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem, euismod volutpat arcu volutpat et.
                    </p> */}
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Testimonials