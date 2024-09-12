import React, { useEffect, useState } from 'react';
import PostCard from './utils/PostCard';
import { Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import PlaceHolder from '../../assets/static/picturesquare-2.webp';
import { toast } from 'react-toastify';
import { FetchEvent } from '../../api/db/blogs';
import { Spinner } from '@material-tailwind/react';

const Posts = () => {
  const dummyData = Array.from({ length: 1 }, (_, index) => ({
    id: index + 1,
    title: `Event ${index + 1}`,
    description: `Description for event ${index + 1}`,
    image: PlaceHolder,
  }));

  const [data, setData] = useState(null);
  
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

    useEffect(() => {
      const FetchEventfromDb = async () => {
        try {
          const promise = await FetchEvent();

          if (promise) setData(promise);
          else toast.info("The Events Data Failed to load, please try again");
        } catch (error) {
          if (error instanceof Error) {
            toast.error(error.message)
          }
          else {
            toast.error("Unknown Error");
          }
        }
      }

      FetchEventfromDb();
    }, [])

  const paginatedData = data?.documents.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div>
      <section className='w-full text-center items-center pb-[1.3rem]'>
        <h1 className='text-3xl font-bold'>
          Recent <span className='text-underline text-blue-500'>Events</span>
        </h1>
      </section>

     {(data !== null && data.documents) ? (
      <>
       <main className='flex justify-start items-center w-full h-full py-[2.2rem] flex-wrap gap-x-[1.8rem] gap-y-[2rem] sm:gap-y-[2.2rem] max-w-7xl mx-auto'>
        {paginatedData.map((item) => (
          <PostCard key={item.$id} title={item.Title} description={item.Description} image={item.Image} id={item.$id} />
        ))}
      </main>

      <section className='py-[3rem] w-full justify-center flex items-center'>
        <Stack spacing={2} className="pagination-container">
          <Pagination
            count={Math.ceil(dummyData.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                {...item}
              />
            )}
          />
        </Stack>
      </section>
      </>
     ) : (
      <>
        <main className='flex justify-center items-center w-full h-[50vh]'>
         <main className='max-w-md mx-auto space-x-2'>
         <Spinner/>
          <Typography className='text-3xl font-medium text-blue-500'>
            Loading...
          </Typography>
         </main>
        </main>
      </>
     )}
    </div>
  );
};

export default Posts;
