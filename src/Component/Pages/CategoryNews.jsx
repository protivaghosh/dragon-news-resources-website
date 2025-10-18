import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
           const filterNews= data.filter((news) => news.category_id == id);
      console.log(filterNews)
      setCategoriesNews(filterNews);
        }
         
       
    }, [data, id])
       
    return (
        <div>
            category{categoriesNews.length}
        </div>
    );
};

export default CategoryNews;