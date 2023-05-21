import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Elements/Banner';
import CardSmall from '../Elements/CardSmall';
import Section from '../Elements/Section';
import setTitle from '../Utility/Common';

const Home = () => {
    const [allProduct, setAllProduct] = useState([]);
    const [tagList, setTagList] = useState([]);
    const [tabActive, setTabActive] = useState(0)

    useEffect(()=>{
        fetch("https://blitz-toyz-server-mavemohiuddin.vercel.app/toys")
        .then(res=>res.json())
        .then(data=>setAllProduct(data))
    }, [])

    useEffect(()=>{
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

            <Section preHeading="Gallery" heading="Fan Favorite" extraClass="bg-orange-100 bg-opacity-50">
                <div className='flex gap-12 overflow-auto pb-6'>
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
            heading="Explore Our collection"
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
        </div>
    );
};

export default Home;