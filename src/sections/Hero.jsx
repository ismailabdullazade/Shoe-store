
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section id="home" className="w-full flex justify-center xl:flex-row flex-col min-h-screen gap-10 max-container">
        <div className="flex flex-col pt-28 relative xl:w-2/5 justify-center items-start">
            <p className="font-montserrat text-xl text-coral-red">Our Summer collections</p>
            <h1 className="">
                <span className="xl:bg-white xl:whitespace-nowrap">The New Arrival</span>
                <br />
                <span className="">Nike</span>Shoes
            </h1>
            <p>Discovery stylish Nike arrivals,quality comfort, and innovation for your active life.</p>
            <Button label="Shop now" iconURL={arrowRight} />

            <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                {statistics.map((stat,index)=>(
                    <div key={index}>
                        <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
                        <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>

                    </div>
                ))}
                
            </div>
        </div>

        <div className="relative flex-1">

        </div>


    </section>
  )
}

export default Hero