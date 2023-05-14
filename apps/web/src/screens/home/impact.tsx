import Impact1 from '../../../assets/vectors/impact1.svg'
import Impact2 from '../../../assets/vectors/impact2.svg'
import Impact3 from '../../../assets/vectors/impact3.svg'

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
        <div className="px-[5vw] text-center py-48">
            <p className="text-6xl text-center font-extrabold ">Our Impact  </p>
            <p className="text-slate-300">Here’s  the services that we offer to you, to ensure both your company’s
                products and employees security</p>
            <div className="grid grid-cols-3">
                {
                    data.map((datum, index) => (
                        <Impact key={index} {...datum} />
                    ))
                }
            </div>
        </div>
    )
}