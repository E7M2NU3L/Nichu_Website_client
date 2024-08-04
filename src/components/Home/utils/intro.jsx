import { Carousel } from "@material-tailwind/react";
import Poster1 from '../../../assets/images/carousel1.jpg';
import Poster4 from '../../../assets/images/carousel4.jpg';
import Poster6 from '../../../assets/images/carousel6.jpg';


export function Intro() {
  return (
    <Carousel
    autoplay
    loop
      className="shadow-2xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={Poster1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={Poster4}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={Poster6}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

