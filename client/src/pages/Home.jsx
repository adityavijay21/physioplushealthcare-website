import i1 from "../assets/image1.jpeg";
import i3 from "../assets/image2.jpeg";
import i2 from "../assets/image3.jpeg";
import Slider from "../components/Slider";
import HomeImage from "../assets/HomeImage.png";
import HomeImage2 from "../assets/HomeImage2.png";
import HomeImage3 from "../assets/homeImage3.png";
import HomeImage4 from "../assets/HomeImage4.png";
import HomeImage5 from "../assets/HomeImage5.png";
import HomeImage6 from "../assets/HomeImage6.png";
import blogimg from "../assets/blogimg.png";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import CardCarousel from "../components/Carousel";

const Home = (props) => {
  let setIsLoginClicked = props.setIsLoginClicked;

  return (
    <div>
      <section className="w-1172 h-642 font-helvatica mt-8 groupbgHomeSection">
        <div
          className=" w-[690px] font-bold text-black text-[58px] font-helvetica mx-auto mt-20
        "
        >
          <div>Free, Personalized Online</div>
          <div className="-mt-5">Physiotherapy Health Care</div>
        </div>
        <div className="w-[971px] font-normal text-zinc-500 text-[18px] mt-10 mx-auto">
          <div>
            Start improving phsyical health and well being today. Let PhysioPlus
            shows you how. Building Power to Build A Physically
          </div>
          <div className="ml-64">
            Healthy World : Supporting Sportsman carrer growth
          </div>
        </div>
        <div className="w-[612px] h-[64px] rounded-md border border-neutral-500 flex items-center flex-row justify-evenly mt-16 mx-auto">
          <form className="flex">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clip-path="url(#clip0_584_3028)">
                  <path
                    d="M10.9998 11.9166C12.5186 11.9166 13.7498 10.6854 13.7498 9.16658C13.7498 7.6478 12.5186 6.41659 10.9998 6.41659C9.48105 6.41659 8.24984 7.6478 8.24984 9.16658C8.24984 10.6854 9.48105 11.9166 10.9998 11.9166Z"
                    stroke="#878787"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9998 20.1666C14.6665 16.4999 18.3332 13.2167 18.3332 9.16658C18.3332 5.1165 15.0499 1.83325 10.9998 1.83325C6.94975 1.83325 3.6665 5.1165 3.6665 9.16658C3.6665 13.2167 7.33317 16.4999 10.9998 20.1666Z"
                    stroke="#878787"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_584_3028">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <select className="text-black bg-white outline-none cursor-pointer">
              <option value="" className="text-center">
                Location
              </option>
              <option value="jaipur" className="p-2 text-center">
                Jaipur, Rajasthan
              </option>
              <option value="Delhi" className="p-2 text-center">
                Delhi, New Delhi
              </option>
            </select>
          </form>
          <p className="ml-5 w-1 text-slate-500">|</p>
          <form className="flex">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g clip-path="url(#clip0_584_3032)">
                  <path
                    d="M19.433 20.1666C19.6897 20.1666 19.818 20.1666 19.9161 20.1167C20.0023 20.0727 20.0724 20.0026 20.1164 19.9164C20.1663 19.8183 20.1663 19.69 20.1663 19.4333V9.89998C20.1663 9.64329 20.1663 9.51494 20.1164 9.4169C20.0724 9.33066 20.0023 9.26055 19.9161 9.2166C19.818 9.16665 19.6897 9.16665 19.433 9.16665L17.233 9.16665C16.9763 9.16665 16.848 9.16665 16.7499 9.2166C16.6637 9.26054 16.5936 9.33066 16.5496 9.4169C16.4997 9.51494 16.4997 9.64329 16.4997 9.89998V12.1C16.4997 12.3567 16.4997 12.485 16.4497 12.5831C16.4058 12.6693 16.3357 12.7394 16.2494 12.7834C16.1514 12.8333 16.023 12.8333 15.7663 12.8333H13.5663C13.3097 12.8333 13.1813 12.8333 13.0833 12.8833C12.997 12.9272 12.9269 12.9973 12.883 13.0836C12.833 13.1816 12.833 13.31 12.833 13.5666V15.7666C12.833 16.0233 12.833 16.1517 12.7831 16.2497C12.7391 16.336 12.669 16.4061 12.5828 16.45C12.4847 16.5 12.3564 16.5 12.0997 16.5H9.89967C9.64298 16.5 9.51464 16.5 9.41659 16.5499C9.33035 16.5939 9.26024 16.664 9.2163 16.7502C9.16634 16.8483 9.16634 16.9766 9.16634 17.2333V19.4333C9.16634 19.69 9.16634 19.8183 9.2163 19.9164C9.26024 20.0026 9.33035 20.0727 9.41659 20.1167C9.51464 20.1666 9.64298 20.1666 9.89967 20.1666L19.433 20.1666Z"
                    stroke="#878787"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.16634 6.23331C9.16634 5.97662 9.16634 5.84828 9.2163 5.75023C9.26024 5.66399 9.33035 5.59388 9.41659 5.54993C9.51464 5.49998 9.64298 5.49998 9.89967 5.49998H12.0997C12.3564 5.49998 12.4847 5.49998 12.5828 5.54993C12.669 5.59388 12.7391 5.66399 12.7831 5.75023C12.833 5.84828 12.833 5.97662 12.833 6.23331V8.43331C12.833 8.69 12.833 8.81835 12.7831 8.91639C12.7391 9.00263 12.669 9.07275 12.5828 9.11669C12.4847 9.16665 12.3564 9.16665 12.0997 9.16665H9.89967C9.64298 9.16665 9.51464 9.16665 9.41659 9.11669C9.33035 9.07275 9.26024 9.00263 9.2163 8.91639C9.16634 8.81835 9.16634 8.69 9.16634 8.43331V6.23331Z"
                    stroke="#878787"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.74967 11.7333C2.74967 11.4766 2.74967 11.3483 2.79963 11.2502C2.84357 11.164 2.91369 11.0939 2.99993 11.0499C3.09797 11 3.22632 11 3.48301 11H5.68301C5.9397 11 6.06804 11 6.16609 11.0499C6.25233 11.0939 6.32244 11.164 6.36639 11.2502C6.41634 11.3483 6.41634 11.4766 6.41634 11.7333V13.9333C6.41634 14.19 6.41634 14.3183 6.36639 14.4164C6.32244 14.5026 6.25233 14.5727 6.16609 14.6167C6.06804 14.6666 5.9397 14.6666 5.68301 14.6666H3.48301C3.22632 14.6666 3.09797 14.6666 2.99993 14.6167C2.91369 14.5727 2.84357 14.5026 2.79963 14.4164C2.74967 14.3183 2.74967 14.19 2.74967 13.9333V11.7333Z"
                    stroke="#878787"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.83301 2.56665C1.83301 2.30996 1.83301 2.18161 1.88296 2.08357C1.92691 1.99733 1.99702 1.92721 2.08326 1.88327C2.18131 1.83331 2.30965 1.83331 2.56634 1.83331H4.76634C5.02303 1.83331 5.15138 1.83331 5.24942 1.88327C5.33566 1.92721 5.40578 1.99733 5.44972 2.08357C5.49967 2.18161 5.49967 2.30996 5.49967 2.56665V4.76665C5.49967 5.02334 5.49967 5.15168 5.44972 5.24973C5.40578 5.33597 5.33566 5.40608 5.24942 5.45002C5.15138 5.49998 5.02303 5.49998 4.76634 5.49998H2.56634C2.30965 5.49998 2.18131 5.49998 2.08326 5.45002C1.99702 5.40608 1.92691 5.33597 1.88296 5.24973C1.83301 5.15168 1.83301 5.02334 1.83301 4.76665V2.56665Z"
                    stroke="#878787"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_584_3032">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <select className="text-black bg-white outline-none cursor-pointer">
              <option value="" className="text-center">
                Category
              </option>
              <option value="chiropractor" className="text-center">
                Chiropractor
              </option>
              <option value="paincare" className="text-center">
                Pain Care
              </option>
              <option value="orthophysio" className="text-center">
                Ortho Physio
              </option>
              <option value="sportsphysio" className="text-center">
                Sports Physio
              </option>
              <option value="pediatriccare" className="text-center">
                Pediatric Care
              </option>
              <option value="neurophysio" className="text-center">
                Neuro Physio
              </option>
            </select>
          </form>
          <button className="w-[94px] h-[42px] p-1 font-bold text-white bg-green-500 rounded-md">
            Search
          </button>
        </div>
      </section>
      <section className="flex items-center mx-auto justify-evenly mt-20 font-helvetica">
        <div className="border w-[361px] h-[491px] rounded-2xl groupBgCard shadow-md space-y-6">
          <p className="items-center mt-6 text-3xl font-bold mx-10">
            Clinical Treatment{" "}
            <span className="ml-6 text-3xl font-bold">Physiotherapy</span>
          </p>
          <p className="text-slate-500 text-[16px] font-normal mx-auto w-[315px]">
            High quality physiotherapy care at our PhysioPlus Centre near you.
            Best Treatment for Ortho / Neuro and many more Issues
          </p>
          <img
            src={i2}
            alt=""
            loading="lazy"
            className="w-[315px] h-[179px] mx-auto rounded-2xl"
          />
          <button className="border border-zinc-400 bg-white text-green-700 text-xl font-semibold px-7 w-[315px] h-[54px] rounded-lg ml-6">
            Schedule a Treatment
          </button>
        </div>
        <div className="border w-[361px] h-[491px] rounded-2xl groupBgCard space-y-6 shadow-md">
          <p className="items-center mt-7 mx-10 text-3xl font-bold">
            Physio Home Visits{" "}
            <span className="-ml-1 text-3xl font-bold">
              Physio's Availability
            </span>
          </p>
          <p className="text-slate-500 text-[15px] font-normal w-[315px] mx-auto">
            Home Visits by certified By PhysioPlus Physiotherapists for Patients
            with mobility issues & for patients looking for convenience
          </p>
          <img
            src={i1}
            alt=""
            loading="lazy"
            className="w-[315px] h-[179px] mx-auto rounded-2xl mt-10"
          />
          <button className="border border-zinc-400 bg-white text-green-700 text-xl font-semibold px-7 w-[315px] h-[54px] rounded-lg ml-6">
            Schedule a Home Visit
          </button>
        </div>
        <div className="border w-[361px] h-[491px] rounded-2xl groupBgCard space-y-6 shadow-md">
          <p className="items-center mt-6 ml-20 mr-3 text-3xl font-bold">
            Expert Online{" "}
            <span className="-ml-1 text-3xl font-bold">Physiotherapy</span>
          </p>
          <p className="text-slate-500 text-[16px] font-normal mx-auto w-[315px]">
            Certified PhysioPlus therapists offer online sessions for patients
            with mobility challenges and those seeking convenience.
          </p>
          <img
            src={i3}
            alt=""
            loading="lazy"
            className="mx-auto rounded-2xl w-[315px] h-[179px]"
          />
          <button className="border border-zinc-400 bg-white text-green-700 text-xl font-semibold px-7 w-[315px] h-[54px] rounded-lg ml-6 mt-2">
            Schedule a Consultation
          </button>
        </div>
      </section>
      <section className="m-5">
        <Slider />
      </section>
      <section>
        <CardCarousel />
      </section>
      <section className="flex justify-center mx-auto mb-20 space-x-32 mt-52">
        <div>
          <p className="w-[528px] text-[45px] font-bold font-helvetica -mt-40">
            Strength Physical Health
          </p>
          <span className="text-[45px] font-bold font-helvetica">
            and Wellness
          </span>
          <p className="w-[538px] text-[20px] font-normal font-helvetica text-zinc-500 mt-6">
            Discover the pinnacle of physical health and wellness with our
            expertly crafted strength programs. Our tailored approach and
            certified professionals will guide you towards your fitness goals,
            ensuring long-lasting vitality and well-being. Elevate your
            strength, elevate your life.
          </p>

          <div className="relative flex mt-10 ml-10">
            <div className="w-6 h-6 rounded-[50%] bg-green-800"></div>
            <AiOutlineCheck className="absolute text-white text-[18px] font-semibold mt-1 ml-1" />
            <p className="text-[23px] ml-4 -mt-1 font-medium font-helvetica">
              Guidance you can trust
            </p>
          </div>
          <div className="relative flex mt-2 ml-10">
            <div className="w-6 h-6 rounded-[50%] bg-green-800"></div>
            <AiOutlineCheck className="absolute text-white text-[18px] font-semibold mt-1 ml-1" />
            <p className="text-[23px] ml-4 -mt-1 font-medium font-helvetica">
              Skill for life success
            </p>
          </div>
          <div className="relative flex mt-2 ml-10">
            <div className="w-6 h-6 rounded-[50%] bg-green-800"></div>
            <AiOutlineCheck className="absolute text-white text-[18px] font-semibold mt-1 ml-1" />
            <p className="text-[23px] ml-4 -mt-1 font-medium font-helvetica">
              Strategies to stay fit
            </p>
          </div>
          <div className="relative flex mt-2 ml-10">
            <div className="w-6 h-6 rounded-[50%] bg-green-800"></div>
            <AiOutlineCheck className="absolute text-white text-[18px] font-semibold mt-1 ml-1" />
            <p className="text-[23px] ml-4 -mt-1 font-medium font-helvetica">
              Strategies to stay fit
            </p>
          </div>

          <Link to="/login">
            <button
              onClick={() => {
                setIsLoginClicked(true);
              }}
              className="text-white font-helvetica border w-[227px] h-[54px] text-xl font-semibold bg-green-700 rounded-[10px] mt-16 ml-10 shadow-md"
            >
              Login For FREE
            </button>
          </Link>
        </div>
        <img
          src={HomeImage}
          alt="home"
          loading="lazy"
          className="w-[476px]h-[476px] rounded-2xl shadow-[rgb(239,245,255)_45px_-35px_2px_10px]"
        />
      </section>
      <section className="flex justify-center mx-auto mb-20 space-x-32 mt-60">
        <img
          src={HomeImage2}
          alt="home"
          loading="lazy"
          className="w-[476px]h-[476px] rounded-2xl shadow-[rgb(239,255,255)_-42px_-29px_2px_10px]"
        />
        <div>
          <p className="w-[528px] text-[45px] font-bold font-helvetica -mt-40">
            Reasons to choose
          </p>
          <span className="text-[45px] font-bold font-helvetica">
            Physio Plus
          </span>
          <p className="w-[538px] text-[20px] font-normal font-helvetica text-zinc-500 mt-6">
            Choose PhysioPlus for personalized care and expert physiotherapists
            who prioritize your well-being, ensuring your path to recovery is
            smooth and effective
          </p>
          <div className="flex mt-10 ml-8">
            <img
              src={HomeImage3}
              alt="home"
              loading="lazy"
              className="w-[46px] h-[226.035px]"
            />
            <div className="font-helvetica text-[23px] font-semibold space-y-7 ml-1">
              <p>Value for money</p>
              <p>Qualified therapists</p>
              <p>Personalised treatment plan</p>
              <p>Convenient</p>
            </div>
          </div>
          <Link to="#">
            <button className="text-green-500 font-helvetica border w-[221px] text-[23px] font-bold bg-white rounded-[10px] mt-16 ml-10 shadow-lg px-2 py-1 hover:scale-105 transition-all 3s ease">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section>
        <div className="flex flex-col px-5 bg-zinc-50">
          <div className="self-center mt-20 text-5xl font-bold text-black whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Popular news and blogs
          </div>
          <div className="text-zinc-500 text-center text-xl self-center max-w-[694px] mt-9 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut lLorem ipsum dolor sit{" "}
          </div>
          <div className="self-center w-full max-w-[1116px] mt-28 mb-44 max-md:max-w-full max-md:my-10">
            <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    src={blogimg}
                    alt="blog1"
                    className="self-start object-cover object-center w-full overflow-hidden aspect-square"
                  />
                  <div className="flex w-[346px] max-w-full items-start gap-5 ml-3 mt-3 max-md:ml-2.5">
                    <div className="text-zinc-500 text-center text-lg w-[262px] mt-1.5">
                      Vidhan Solanki • 3days Ago
                    </div>
                    <div className="text-black text-center text-base bg-emerald-400 bg-opacity-50 w-[60px] max-w-full pl-3 pr-3.5 py-1 rounded self-start">
                      Tips{" "}
                    </div>
                  </div>
                  <div className="mt-6 text-xl font-medium text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </div>
                  <div className="mt-4 text-xl text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    src={blogimg}
                    alt="blog2"
                    className="self-start object-cover object-center w-full overflow-hidden aspect-square"
                  />
                  <div className="flex w-[346px] max-w-full items-start gap-5 ml-3 mt-3 self-start max-md:ml-2.5">
                    <div className="text-zinc-500 text-center text-lg w-[262px] mt-1.5 self-start">
                      Vidhan Solanki • 3days Ago
                    </div>
                    <div className="text-black text-center text-base bg-emerald-400 bg-opacity-50 w-[59px] max-w-full pl-3 pr-3.5 py-1 rounded self-start">
                      Tips{" "}
                    </div>
                  </div>
                  <div className="mt-6 text-xl font-medium text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </div>
                  <div className="mt-4 text-xl text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col grow max-md:mt-10">
                  <img
                    loading="lazy"
                    src={blogimg}
                    alt="blog3"
                    className="self-start object-cover object-center w-full overflow-hidden aspect-square"
                  />
                  <div className="flex w-[346px] max-w-full items-start gap-5 ml-3 mt-3 self-start max-md:ml-2.5">
                    <div className="text-zinc-500 text-center text-lg w-[262px] mt-1.5 self-start">
                      Vidhan Solanki • 3days Ago
                    </div>
                    <div className="text-black text-center text-base bg-emerald-400 bg-opacity-50 w-[62px] max-w-full pl-3 pr-3.5 py-1 rounded self-start">
                      Tips{" "}
                    </div>
                  </div>
                  <div className="mt-6 text-xl font-medium text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </div>
                  <div className="mt-4 text-xl text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-20 text-center">
              <button className="text-white bg-green-500 rounded-md w-[164px] h-[62.537px] hover:shadow-md">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-evenly mt-10">
        <div className="">
          <p className="w-[519px] h-[111px] text-[35px] font-semibold mt-20">
            Unleash Extraordinary Possibilities with Our App!
          </p>
          <p className="text-xl font-normal text-zinc-600">
            Start your 30-day free trail today.
          </p>
          <div className="flex mt-20">
            <div>
              <img
                src={HomeImage5}
                alt="home"
                loading="lazy"
                className="w-[154px] h[50px] cursor-pointer"
              />
            </div>
            <div className="mt-[0.2rem]">
              <img
                src={HomeImage6}
                alt="home"
                loading="lazy"
                className="w-[154px] h[50px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <img
              src={HomeImage4}
              alt="home"
              loading="lazy"
              className="w-[256px] h-[438px] absolute ml-12 -mt-7"
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="330"
              height="334"
              viewBox="0 0 330 334"
              fill="none"
            >
              <path
                d="M116.563 315.784C47.6886 273.578 -24.4419 239.831 9.5751 184.32C43.5921 128.809 46.9416 123.343 158.661 22.2121C300.004 -78.7394 353.511 209.045 319.494 264.556C285.477 320.066 185.437 357.99 116.563 315.784Z"
                fill="#EAFBEA"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="flex flex-col">
          <div className="bg-gray-50 self-center flex w-full max-w-[1400px] flex-col px-5 py-11 rounded-2xl max-md:max-w-full">
            <div className="self-center flex w-[617px] max-w-full flex-col">
              <div className="text-black text-center text-2xl font-semibold self-center ml-2.5 whitespace-nowrap max-md:max-w-full">
                Have Questions or Need Assistance?{" "}
              </div>
              <div className="self-stretch mt-5 text-xl text-center text-neutral-600 whitespace-nowrap max-md:max-w-full">
                Contact us now for a quick resolution. Our team is ready to
                assist.
              </div>
              <div className="self-center flex w-[572px] max-w-full items-start justify-between gap-5 ml-2.5 mt-11 max-md:flex-wrap max-md:mt-10">
                <form className="text-zinc-500 text-base font-medium self-stretch w-[300px] max-w-full grow basis-auto pl-4 pr-5 py-4 rounded-md border-[0.5px] border-solid border-black">
                  Enter your email
                </form>
                <button className="bg-green-500 font-semibold text-zinc-100 mt-1 flex items-center justify-center w-[142px] max-w-full flex-col px-3 py-3 rounded-md hover:shadow-md">
                  Send
                </button>
              </div>
              <div className="text-black text-center text-xs font-light underline ml-24 mt-2.5 self-start whitespace-nowrap max-md:ml-2.5">
                We care about your data in our privacy policy.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
