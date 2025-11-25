import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={`mx-3 ${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full white__gradient"/>
    </div>

    <div className={`lg:pl-12 ${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>Easy control your <br className="sm:block hidden"/>
      billing & invoicing</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Mudah memonitoring transaksi apapun 
        yang anda lakukan dimanapun dan kapanpun tanpa ribet. 
        Anda dapat melakukan transaksi jenis apapun dengan mudah aman dan cepat.</p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className='w-[128px] h-[42] object-contain mr-5 cursor-pointer hover:brightness-150 hover:scale-105 transTime-5' />
        <img src={google} alt="google_pay" className='w-[128px] h-[42] object-contain cursor-pointer hover:brightness-150 hover:scale-105 transTime-5' />
      </div>
    </div>    
  </section>
)

export default Billing