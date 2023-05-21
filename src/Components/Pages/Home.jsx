/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Banner from '../Elements/Banner';
import CardSmall from '../Elements/CardSmall';
import Section from '../Elements/Section';
import { AuthContext } from '../Utility/AuthProvider';
import setTitle from '../Utility/Common';

const Home = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [specialProduct, setSpecialProduct] = useState([]);
    const [tagList, setTagList] = useState([]);
    const [tabActive, setTabActive] = useState(0)

    useEffect(()=>{
        fetch("https://blitz-toyz-server-mavemohiuddin.vercel.app/toys")
        .then(res=>res.json())
        .then(data=>setAllProduct(data))
    }, [])

    useEffect(()=>{
        setSpecialProduct(allProduct[3])
        let newArray = []
        allProduct.map(item=>{
            if (!newArray.includes(item.sub_category)) {
                newArray.push(item.sub_category)
            }
        })
        setTagList(newArray);
    }, [allProduct])

    useEffect(()=>{
        const allHeaders = document.querySelectorAll("[data-tab-heading]");
        const allContents = document.querySelectorAll("[data-tab-content]");
        allHeaders.length > 0 ? allHeaders.forEach(header=>header.classList.remove("bg-blue-300")) : null;
        allHeaders.length > 0 ? allHeaders[tabActive].classList.add("bg-blue-300") : null;
        allContents.length > 0 ? allContents.forEach(item=>item.classList.add("hidden")) : null;
        allContents.length > 0 ? allContents[tabActive].classList.remove("hidden") : null;
    },[tabActive])
    

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const openProduct = id => {
        if (user) {
            navigate(`/toy/${id}`, {replace:true})
        } else {
            Swal.fire({
                title:`You're not logged in!`,
                icon: 'info',
                html:`You Must Log in to view details!`,
                showCancelButton: true,
                cancelButtonText: "Later",
                confirmButtonText: "Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/login", {replace:true});
                  scrollTo(0,0)
                }
            })
        }
    }

    setTitle("Blitz Toyz");
    return (
        <div>
            <Section extraClass="pb-4">
                <Banner
                preHeading="Work Hard Play Hard"
                heading="Best Action Figure Collectable"
                subHeading="Choose from our massive collection"
                image="https://i.pinimg.com/originals/b2/ff/02/b2ff020a299e78c92fe626a0221d3517.jpg"
                extraClass="pt-32"
                >
                    <div className='flex items-center'>
                        <Link to="/alltoyz" className='px-4 py-2 rounded transition border border-gray-600 text-white bg-primary hover:bg-h-primary'>View All Toyz</Link>
                    </div>
                </Banner>
            </Section>

            <Section extraClass="pt-0 pb-6">
                <div className='grid grid-cols-3 relative'>
                    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-3/4 border-l border-r border-gray-400'></div>
                    <div>
                        <img src="https://media-www.canadiantire.ca/product/seasonal-gardening/toys/toys-games/0508371/transformers-cybertron-roll-and-transform-assorted-6b39e387-9bd2-4ee0-b035-01773f7173f5.png" alt="" className='h-32 w-full object-contain object-center' />
                        <p className='text-center font-heading'>Transformers</p>
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/236x/a5/48/b0/a548b0f0c022901bf902b16ba3f08dbe.jpg" alt="" className='h-32 w-full object-contain object-center' />
                        <p className='text-center font-heading'>Iron Man</p>
                    </div>
                    <div>
                        <img src="https://i5.walmartimages.com/asr/8913647a-f4b3-4bcb-bb12-b3f6a4049159.4b61bc93c2696ba0e45aa623bf3f39c7.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF" alt="" className='h-32 w-full object-contain object-center' />
                        <p className='text-center font-heading'>HULK</p>
                    </div>
                </div>
            </Section>

            <Section preHeading="Editor's Choice" heading="Toy of the day">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {specialProduct &&
                        <>
                            <div className='relative isolate flex items-end justify-center'>
                                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 -z-20 bg-h-primary bg-opacity-30 h-96 w-96 rounded-full'></div>
                                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-h-primary bg-opacity-30 h-80 w-80 rounded-full'></div>
                                <div className='overflow-hidden rounded-b-full h-[450px] pt-20 w-96 grow_parent'>
                                    <img src={specialProduct.image}  className="object-contain mb-12 transition duration-500" />
                                </div>
                            </div> 
                            <div className='flex flex-col justify-center'>
                                <p className='font-heading text-3xl tracking-wide'>{specialProduct.name}
                                <span className='font-sans text-base ml-2 whitespace-nowrap'> (★ {specialProduct.rating})</span></p>
                                <p className='mt-2'>Price: <span className='font-heading font-bold text-lg'>${specialProduct.price}</span></p>
                                <p className='mt-1'>In Stock: <span className='font-heading font-bold text-lg'>{specialProduct.quantity}</span></p>
                                <p className='my-4'>{specialProduct.description}</p>
                                <p className='mt-2'>Category - 
                                    <span className='px-2 py-px ml-2 rounded bg-h-secondary max-w-max'>{specialProduct.sub_category}</span>
                                </p>
                                <p className='mt-2'>Seller -
                                    <span className='px-2 py-px ml-2 border border-gray-300 max-w-max'>{specialProduct.seller_name}</span>
                                </p>
                                <button onClick={()=>openProduct(specialProduct._id)} className="px-4 py-2 bg-primary hover:bg-h-primary transition text-white rounded block max-w-max mt-8">View Details</button>
                            </div>
                        </>
                    }
                </div>
            </Section>

            <Section preHeading="Gallery" heading="Fan Favorite" extraClass="bg-orange-100 bg-opacity-50">
                <div className='flex gap-12 overflow-auto pb-6 horizontal_scrollbar'>
                    {
                        allProduct.map(product=>{
                            if (product.id <= 12) {
                                return <img key={product._id} src={product.image} className="h-60 w-60 object-contain shadow-lg border px-4 py-2 bg-white" />
                            }
                        })
                    }
                </div>
            </Section>

            <Section
            preHeading="Blitz Toyz"
            heading="Shop By Category"
            extraClass="bg-blue-100 bg-opacity-50"
            >
                <div className='flex items-center justify-center gap-2 mt-8'>
                    {
                        tagList.map(tag=>{
                            return <button key={tagList.indexOf(tag)} data-tab-heading onClick={()=>setTabActive(tagList.indexOf(tag))} className={`px-4 py-2 bg-blue-100 transition hover:bg-blue-200 ${tagList.indexOf(tag)==0?"bg-blue-300":null} whitespace-nowrap`}>{tag}</button>
                        })
                    }
                </div>
                <div className='mt-4'>
                    {
                        tagList.map(tag=>{
                            // return <div key={tagList.indexOf(tag)} data-tab-content className="text-center hidden">{tag}</div>
                            return <div key={tagList.indexOf(tag)} data-tab-content className={`text-center grid grid-cols-1 md:grid-cols-3 gap-4 ${tagList.indexOf(tag)==0?"":"hidden"}`}>
                                {allProduct.map(product=>{
                                    if (product.sub_category == tag) {
                                        return <CardSmall key={product._id} product={product}></CardSmall>
                                    }
                                })}
                            </div>
                        })
                    }
                </div>
            </Section>

            <Section preHeading="Reviews" heading="Customer Reviews" extraClass="bg-purple-100">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-12'>
                    <div className='bg-white rounded px-6 py-8 relative isolate overflow-hidden'>
                        <img src="https://i.ibb.co/k53XKk7/star.png" className='h-40 w-40 -z-10 absolute -right-12 top-2 rotate-45 opacity-10 review_star01' />
                        <img src="https://i.ibb.co/k53XKk7/star.png" className='h-20 w-20 -z-10 absolute -left-8 bottom-2 rotate-45 opacity-10 review_star02' />
                        <p className="text-xl text-center font-heading">Excellent Quality and Design</p>
                        <p className='mt-6'>I am extremely satisfied with this product. The quality is exceptional, and the design is impressive. It exceeded my expectations and provided great value for the price. Highly recommended!</p>
                    </div>
                    <div className='bg-white rounded px-6 py-8 relative isolate overflow-hidden'>
                        <img src="https://i.ibb.co/k53XKk7/star.png" className='h-40 w-40 -z-10 absolute -right-12 top-2 rotate-45 opacity-10 review_star01' />
                        <img src="https://i.ibb.co/k53XKk7/star.png" className='h-20 w-20 -z-10 absolute -left-8 bottom-2 rotate-45 opacity-10 review_star02' />
                        <p className="text-xl text-center font-heading">Perfect Gift for Fans</p>
                        <p className='mt-6'>I purchased this as a gift for my friend, and they absolutely loved it! The attention to detail and craftsmanship are remarkable. It's a must-have for any fan of the franchise. The recipient couldn't be happier!</p>
                    </div>
                    <div className='bg-white rounded px-6 py-8 relative isolate overflow-hidden'>
                        <img src="https://i.ibb.co/k53XKk7/star.png" className='h-40 w-40 -z-10 absolute -right-12 top-2 rotate-45 opacity-10 review_star01' />
                        <img src="https://i.ibb.co/k53XKk7/star.png" className='h-20 w-20 -z-10 absolute -left-8 bottom-2 rotate-45 opacity-10 review_star02' />
                        <p className="text-xl text-center font-heading">Great Playtime Fun</p>
                        <p className='mt-6'>This product has provided hours of enjoyment for my kids. The durability is impressive, and it can withstand rough play. The interactive features and vibrant colors make it engaging and captivating. A fantastic toy that keeps the kids entertained!</p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Home;