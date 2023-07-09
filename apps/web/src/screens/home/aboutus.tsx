import ReviewCard from "./components/review.card"

const data =  new Array(5).fill(
    {
        image : 'https://res.cloudinary.com/dzcmadjl1/image/',
        name :'Eng, Peter MUGABE',
        title : 'Mining enginner  at Tinco Ltd.',
        review : `Here’s  the services that we offer to you, to ensure both your company’s products and employees security   Here’s  the services that we offer to you, to ensure both your company’s products and employees security                   Here’s  the services that we offer to you, to ensure both your company’s products and employees security Here’s  the services that we offer to you, to ensure both your company’s products and employees security`
    }
)

export default function AboutUs() {
    return (
        <div className="px-[5vw]  py-48 bg-gradient-to-b from-P-50  to-yellow-0">
            <p className="text-6xl  font-extrabold sm:hidden">What they talk about us  </p>
            <p className="text-6xl  font-extrabold md:hidden">Reviews  </p>
            <p className="text-slate-600 my-6 ">Here’s  the services that we offer to you, to ensure both your company’s
                products and employees security</p>
            <div className="flex items-start gap-10 overflow-x-hidden hover:overflow-x-scroll scroll-smooth scrollable">
                {
                    data.map((datum, index) => (<ReviewCard key={index} {...datum} /> ))
                }
            </div>
        </div>
    )
}