import Logo from './components/Logo/Logo.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
  return (
    <div className="body">
   {/* <img src='/bg-color.jpg' height={800} width={1200} /> */}
   {/* <div className="absolute -z-1 md:block hidden">
    <svg height={800} width={1200} viewBox="0 0 1630 1083" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
    <path d="M641.468 232.691C573.198 226.735 520.087 237.885 489.526 264.421C459.02 290.908 452.403 331.507 470.813 380.636C489.229 429.78 531.738 484.883 592.382 538.14C653.019 591.39 728.687 640.073 808.69 677.302C888.694 714.532 968.966 738.416 1038.16 745.589C1107.37 752.765 1161.9 742.849 1194.14 717.379C1210.24 704.654 1220.39 688.361 1224.44 669.194C1228.49 650.019 1226.45 627.936 1218.14 603.636C1201.5 555.026 1160.6 500.094 1101.16 446.618M725.878 194.255C599.141 146.499 487.81 128.355 411.902 143.006C373.959 150.33 346.162 165.598 329.235 187.709C312.313 209.814 306.199 238.83 311.761 273.771C322.892 343.691 380.028 432.585 473.011 524.436C565.977 616.269 688.602 704.96 818.805 774.532C949.012 844.105 1078.21 889.971 1183.14 903.891C1235.6 910.851 1280.25 909.592 1315.43 900.566C1350.61 891.541 1376.29 874.761 1390.9 850.698C1405.51 826.635 1408.62 796 1400.54 760.417C1392.44 724.831 1373.16 684.332 1343.03 640.597C1282.76 553.128 1183.15 458.55 1062.09 373.905M17.765 81.7612C-72.5543 238.199 211.083 571.047 651.286 825.199C1091.49 1079.35 1521.56 1158.56 1611.88 1002.13C1702.2 845.688 1418.57 512.84 978.362 258.688C538.158 4.53636 108.084 -74.6765 17.765 81.7612Z" stroke="white" strokeOpacity="0.1" />
    </svg>
   </div> */}

    <Navbar />
    <section className="text-gray-400 body-font">
  <div className="md:container mx-auto flex md:px-5 py-10 md:py-1 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 px-5 md:px-0 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <div className="font-balginBold">
      <h1 className="title-font text-5xl md:text-6xl mb-4 font-bold text-white">
      Empowering Businesses with AI & Web3 Integration.
      </h1>
      </div>
      <p className="md:container mx-auto flex md:px-5 py-10 md:py-1 md:flex-row flex-col items-center font-balginBold">Welcome to Datalinc, your trusted partner in leveraging the power of Artificial Intelligence & Web3 technologies for business improvement. We are here to revolutionize your operations, drive innovation, & unlock new possibilities in the digital era.</p>
      {/* <div className="flex justify-center font-MontserratRegular">
        <button className="inline-flex text-white bg-[#48c5ef] border-0 py-2 px-6 focus:outline-none hover:bg-[#e8e8e8] rounded text-lg hover:text-black font-balginBold font-bold hover:scale-110 transition-all">Learn</button>
        <button className="ml-4 inline-flex text-gray-700 hover:text-white bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-white/40 rounded text-lg font-balginBold font-bold hover:scale-110 transition-all">Explore More</button>
      </div> */}
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Logo />
    </div>
  </div>
</section>

    <Footer/>
    </div>
  );
}

export default App;
