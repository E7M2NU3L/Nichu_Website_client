import { Button } from '@mui/material';
import Image1 from '../assets/static/picturesquare-10.webp';
import Image2 from '../assets/static/picturesquare-2.webp';
import Image3 from '../assets/static/picturesquare-3.webp';
import Image4 from '../assets/static/picturesquare-4.webp';
import Image5 from '../assets/static/picturesquare-5.webp';
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';

export default function SingleProduct() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
      <div className='carousel-container'>
      <Carousel className='custom-carousel'>
        <div>
          <img src={Image1} alt="Slide 1" />
        </div>
        <div>
          <img src={Image2} alt="Slide 2" />
        </div>
        <div>
          <img src={Image3} alt="Slide 3" />
        </div>
        <div>
          <img src={Image4} alt="Slide 4" />
        </div>
        <div>
          <img src={Image5} alt="Slide 5" />
        </div>
      </Carousel>
    </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 grid gap-6">
        <div className="grid gap-2">
          <h1 className="text-2xl md:text-3xl font-bold">Acme Wireless Headphones</h1>
          <p className="text-muted-foreground">
            Experience the ultimate in sound quality and comfort with our Acme Wireless Headphones. Crafted with premium
            materials and advanced audio technology, these headphones deliver an immersive listening experience that
            will transport you to a new level of audio bliss.
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
          <span className="text-3xl font-bold">$99.99</span>
          <div className="flex gap-2">
            <Link to={"/products/buy/12345"}>
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">Reviews</h2>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <img src={Image1} alt="" width={55} height={55} className="rounded-full" />
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  I absolutely love these headphones! The sound quality is incredible, and the noise cancellation
                  feature is a game-changer. They're also incredibly comfortable to wear for long listening sessions.
                  Highly recommend!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
            <img src={Image1} alt="" width={55} height={55} className="rounded-full" />
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Alex Smith</h3>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  These headphones are an absolute game-changer! The sound quality is unparalleled, and the wireless
                  connectivity is incredibly reliable. I've been using them for work and personal use, and they've
                  exceeded all my expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg overflow-hidden shadow-sm">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Related Product"
                className="object-cover w-full aspect-[4/3]"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Acme Wireless Earbuds</h3>
                <p className="text-muted-foreground">
                  Experience true wireless freedom with our Acme Wireless Earbuds.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold">$79.99</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-sm">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Related Product"
                className="object-cover w-full aspect-[4/3]"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Acme Bluetooth Speaker</h3>
                <p className="text-muted-foreground">Powerful sound in a compact, portable design.</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold">$59.99</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-sm">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Related Product"
                className="object-cover w-full aspect-[4/3]"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Acme Wireless Charger</h3>
                <p className="text-muted-foreground">Effortless charging for your devices.</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold">$39.99</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
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
  )
}