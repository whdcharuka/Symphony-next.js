import Image from 'next/image'
import Head from 'next/head';
import service from '/public/images/Customer-Service.jpg'
import styles from '/styles/Services.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faHeadphones, faThumbsUp, faTruck } from "@fortawesome/free-solid-svg-icons";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Link from 'next/link';

const Wrapper = () => {
    const data = [
      {
        cateImg: "./images/Categories/car.png",
        title: "Vehical Parts",
        path:"./Vehicalparts",
      },
      {
        cateImg: "./images/Categories/smartphone (2).png",
        title: "Electronics",
        path:"./ElectronicDevices",
      },
      {
        cateImg: "./images/Categories/house.png",
        title: "Home & Garden",
        path:"./HomeGarden",
      },
      {
        cateImg: "./images/Categories/cat.png",
        title: "Pets",
        path:"./Animals",
      },
      {
        cateImg: "./images/Categories/toys.png",
        title: "Toys",
        path:"/Toys",
      },
      {
        cateImg: "./images/Categories/sports.png",
        title: "Hobby & Sport",
        path:"./HobbySport",
      },
      {
        cateImg: "./images/Categories/burger.png",
        title: "Food",
        path:"./Foods",
      },
      {
        cateImg: "./images/Categories/education.png",
        title: "Education",
        path:"./Education",
      },
      {
        cateImg: "./images/Categories/essential-oil.png",
        title: "Essentials",
        path:"./Essentials",
      },
      {
        cateImg: "./images/Categories/dress.png",
        title: "Fashion & Beauty",
        path:"./FashionBeauty",
      },
      {
        cateImg: "./images/Categories/giftbox.png",
        title: "Gifts",
        path:"./Gifts",
      },
      {
        cateImg: "./images/Categories/guitar.png",
        title: "Music",
        path:"./Music",
      },
    ]
    return (
      <>
<Navbar/>
<section className='wrapper123 wbackground123'>
        <h1 className="how1">Browse items by category</h1>
          <div className='wcontainer grid5'>
            {data.map((val, index) => {
              return (
                <div key={index}>
                  <Link href={val.path}></Link>
                  <div className="category1">
                   <img src={val.cateImg} alt='' />
                  </div>
                  <span>{val.title}</span>
                </div>
              )
            })}
          </div>
        </section>
<div>
        <Head><title>Terms & Conditions</title></Head>
    <section className={styles.bg1}>
   
        <h1 className={styles.text1}>How it works?</h1>
    
   
        <div className='container'>
            <div className='row'>
                
                <div className='col-lg-3 mb-2'>
                    <div className='card h-100  bg-light border-0'>
                        <div className='card-body'>
                            <i><FontAwesomeIcon icon={faTruck} /></i>
                            <h5>Fast Delivery</h5>
                            <p>We provide lslandwide delivery within 4-7 days.</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 mb-2'>
                    <div className='card h-100  bg-light border-0 '>
                        <div className='card-body'>
                           <i> <FontAwesomeIcon icon={faArchive} /></i>
                            <h5>Quality Product</h5>
                            <p>We sell genuine products with company authorized.</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 mb-2'>
                    <div className='card h-100  bg-light border-0'>
                        <div className='card-body'>
                            <i><FontAwesomeIcon icon={faThumbsUp} /></i>
                            <h5>Shop With Confidence </h5>
                            <p>Confident and active online services.</p>
                        </div>
                    </div>

                </div>
                <div className='col-lg-3 mb-2'>
                    <div className='card h-100  bg-light border-0'>
                        <div className='card-body'>
                            <i><FontAwesomeIcon icon={faHeadphones} /></i>
                            <h5>24/7 Support</h5>
                            <p>Call our hotlines during office hours for any questions or inquiries.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <div className={styles.servicesfooter}>
        <Footer/>
      </div>
    </div>
      </>
    )
  }
  
  export default Wrapper