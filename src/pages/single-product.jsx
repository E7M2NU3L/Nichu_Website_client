import { Button } from '@mui/material';
import { Carousel } from "react-responsive-carousel";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchArduinoQuery, FetchElectronicsQuery, FetchRoboticsQuery, FetchSingleProductQuery } from '../queries/products';

export default function SingleProduct() {
  const [products, setProducts] = useState(null);
  const location = useLocation();
  const productId = location.pathname.split('/').pop(); // Extract product ID from URL

  const { isPending: isFetchingSingleProduct, isError: isFailedToFetchSingleProduct, data: SingleProductData } = FetchSingleProductQuery(productId);

  useEffect(() => {
    if (isFetchingSingleProduct || !SingleProductData) return;

    // Fetch related products based on category
    if (SingleProductData.category === "electronics") {
      const { isPending: isFetchingElectronics, data: ElectronicsData } = FetchElectronicsQuery();
      if (!isFetchingElectronics && ElectronicsData) {
        setProducts(ElectronicsData);
      }
    } else if (SingleProductData.category === "arduino") {
      const { isPending: isFetchingArduino, data: ArduinoData } = FetchArduinoQuery();
      if (!isFetchingArduino && ArduinoData) {
        setProducts(ArduinoData);
      }
    } else if (SingleProductData.category === "robotics") {
      const { isPending: isFetchingRobotics, data: RoboticsData } = FetchRoboticsQuery();
      if (!isFetchingRobotics && RoboticsData) {
        setProducts(RoboticsData);
      }
    }
  }, [isFetchingSingleProduct, SingleProductData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <div className='carousel-container'>
          <Carousel className='custom-carousel'>
            {SingleProductData?.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 grid gap-6">
        <div className="grid gap-2">
          <h1 className="text-2xl md:text-3xl font-bold">{SingleProductData?.title}</h1>
          <p className="text-muted-foreground">
            {SingleProductData?.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">4.3</span>
          <span className="text-muted-foreground">(124 reviews)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">${SingleProductData?.price}</span>
          <div className="flex gap-2">
            <Link to={`/products/buy/${productId}`}>
              <Button size="sm" variant='contained' color='secondary'>Buy Now</Button>
            </Link>
            <Button size="sm" variant='contained' color='secondary'>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3 grid gap-8">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products?.map((product) => (
              <div key={product.id} className="bg-background rounded-lg overflow-hidden shadow-sm">
                <img
                  src={product.thumbnail}
                  width={400}
                  height={300}
                  alt="Related Product"
                  className="object-cover w-full aspect-[4/3]"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold">${product.price}</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
