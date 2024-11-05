import Image from "next/image"
import girl from "../../../public/images/girl.png"

const Hero = () => {
    return (
        <div className="flex items-center justify-center pt-12 md:py-[60px] lg:py-[100px] 2xl:py-[150px]">
            <div className="flex flex-col sm:flex-row-reverse items-center">
                <Image src={girl} alt="girl" className="w-[160px] sm:w-[200px] md:w-[210px] lg:w-[270px] xl:w-[300px] 2xl:w-[462px] mb-12 sm:ml-20 md:ml-[90px] lg:ml-[120px] xl:ml-[250px]"></Image>
                <div>
                    <h1 className="w-[200px] md:w-[225px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px] text-lg md:text-xl lg:text-3xl xl:text-[32px] font-[700] sm:mt-10 2xl:font-title 2xl:text-[40px] 2xl:leading-[65.8px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                    <p className="w-[200px] md:w-[280px] lg:w-[400px] 2xl:w-[800px] 2xl:leading-[49.35px] 2xl:h-[147px] xl:text-[23px] 2xl:text-start lg:text-[22px] my-5 lg:my-7 lg:mb-8 text-justify 2xl:font-title text-[#787054] 2xl:text-[30px]">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
                    <button className="rounded-[6px] lg:rounded-[9px] bg-[#A29875] p-[6px] lg:text-xl xl:text-[23px] lg:p-[9px] xl:p-[10px] mb-20 text-white 2xl:font-title 2xl:text-[30px] 2xl:font-[500] 2xl:leading-[37.5px] 2xl:w-[288px] 2xl:h-[58px] 2xl:rounded-[10px] 2xl:p-[10px] hover:bg-[#787054]">Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero