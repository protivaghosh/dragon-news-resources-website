import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const CategoryNews = () => {
    const {id} = useParams();
    const data = useLoaderData();
    // console.log(id, data);
    const [categoriesNews, setCategoriesNews] = useState([]);
    useEffect(()=>{
        if(id == '0'){
            setCategoriesNews(data)
            return;
        } else if(id == "1"){
           const filterNews= data.filter((news) => news.others.is_today_pick == true);
           setCategoriesNews(filterNews);
        }else{
           const filterNews= data.filter((news) => news.category_id === parseInt(id));
      console.log(filterNews)
      setCategoriesNews(filterNews);
        }
         
       
    }, [data, id])
       
    return (
        <div>
            <h2 className='font-bold'>Dragon News Home</h2>
            <div className='grid grid-cols-1 mt-5'>
              {
                categoriesNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
              }
            </div>
        </div>
    );
};

export default CategoryNews;