import icon1 from '../assets/card/icon-1.svg'
import icon2 from '../assets/card/icon-2.svg'
import icon3 from '../assets/card/icon-3.svg'

const data = [
    {
        img: icon1,
        title: 'Product design',
        text: 'I offer innovative and attention-grabbing product design services. From initial ideation to implementation.'
    },
    {
        img: icon2,
        title: 'Frontend develop',
        text: 'Specialize in responsive and interactive front-end development. With a deep understanding of HTML, CSS, and JS.'
    },
    {
        img: icon3,
        title: 'Brand strategy',
        text: 'I help design strong and captivating brand strategies. Through thorough research and market analysis.'
    }
]

function Card() {

    return (
        <div>
            <div className='flex gap-3'>
                {
                    data.map((ele, idx) => {
                        return (
                            <div className='text-white w-1/3 bg-zinc-800  py-14 px-5'>
                                <img className='mb-8' src={ele.img} alt="Icon" />
                                <h3 className='text-3xl font-medium mb-5'>{ele.title}</h3>
                                <p className='text-stone-500 '>{ele.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card