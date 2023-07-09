import Impact1 from '../../../assets/vectors/impact1.svg'
import Impact2 from '../../../assets/vectors/impact2.svg'
import Impact3 from '../../../assets/vectors/impact3.svg'
import ImpactCard from './components/impact.card'
const data = [
    {
        title: 'Poweful Incident reporting system at the site',
        desc: 'Here’s  the services that we offer to you, to ensure both your company’s products and employees security',
        image: Impact1.src,
    },
    {
        title: 'Poweful and Extra secure transaction recording',
        desc: 'Here’s  the services that we offer to you, to ensure both your company’s products and employees security',
        image: Impact2.src,
    },
    {
        title: 'Improvement in company’ performance stats.',
        desc: 'Here’s  the services that we offer to you, to ensure both your company’s products and employees security',
        image: Impact3.src,
    },

]
export default function Impact() {
    return (
        <div className="px-[5vw]  py-48 bg-gradient-to-b from-yellow-50  to-yellow-0">
            <p className="text-6xl text-center font-bold ">Our Impact  </p>
            <p className="text-slate-300 my-6 text-center">Here’s  the services that we offer to you, to ensure both your company’s
                products and employees security</p>
            <div className="md:grid md:grid-cols-3 md:gap-10 md:space-y-0 space-y-20">
                {
                    data.map((datum, index) => (
                        <ImpactCard key={index} {...datum} />
                    ))
                }
            </div>
        </div>
    )
}