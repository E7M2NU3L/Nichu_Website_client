import { Button } from "@mui/material"
import { Link } from "react-router-dom" 

export default function Products() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6 text-center max-w-7xl mx-auto text-white">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Discover the Latest Electronics and Arduino Projects
            </h1>
            <p className="mx-auto max-w-[700px] text-white-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our wide range of cutting-edge electronics and Arduino-based projects, perfect for hobbyists,
              makers, and tech enthusiasts.
            </p>
            <div className="flex justify-center">
              <Link
                to="/products"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-400 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Electronics</h2>
                <p className="text-muted-foreground">Explore our collection of cutting-edge electronics.</p>
              </div>
              <Link
                to="/products"
                className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Digital Multimeter</h3>
                  <p className="text-muted-foreground">Measure voltage, current, and resistance with precision.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$49.99</span>
                        <Link to={"/products/122345"}
                        ><Button variant="contained" color="info" size="sm">Buy Now</Button></Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Soldering Iron Kit</h3>
                  <p className="text-muted-foreground">Everything you need to start soldering electronics.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$29.99</span>
                        <Link to={"/products/122345"}
                        ><Button variant="contained" color="info" size="sm">Buy Now</Button></Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Raspberry Pi 4</h3>
                  <p className="text-muted-foreground">Powerful single-board computer for your projects.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$59.99</span>
                        <Link to={"/products/122345"}
                        ><Button variant="contained" color="info" size="sm">Buy Now</Button></Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Arduino Uno R3</h3>
                  <p className="text-muted-foreground">The classic microcontroller board for hobbyists.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$24.99</span>
                        <Link to={"/products/122345"}>
                        <Button variant="contained" color="info" size="sm">Buy Now</Button>
                        </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 mt-12">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Arduino Kits</h2>
                <p className="text-muted-foreground">Explore our selection of Arduino-based project kits.</p>
              </div>
              <Link
                to="/products"
                className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Arduino Starter Kit</h3>
                  <p className="text-muted-foreground">Everything you need to get started with Arduino.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$69.99</span>
                        <Link to={"/products/122345"}>
                        <Button variant="contained" color="info" size="sm">Buy Now</Button>
                        </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Arduino Robot Kit</h3>
                  <p className="text-muted-foreground">Build your own Arduino-powered robot.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$99.99</span>
                        <Link to={"/products/122345"}
                        > <Button variant="contained" color="info" size="sm">Buy Now</Button></Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Arduino IoT Kit</h3>
                  <p className="text-muted-foreground">Create your own Internet of Things projects.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$79.99</span>
                        <Link to={"/products/122345"}>
                        <Button variant="contained" color="info" size="sm">Buy Now</Button>
                        </Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Arduino Sensor Kit</h3>
                  <p className="text-muted-foreground">Explore the world of Arduino sensors.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$59.99</span>
                        <Link to={"/products/122345"}
                        ><Button variant="contained" color="info" size="sm">Buy Now</Button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 mt-12">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">Robotics</h2>
                <p className="text-muted-foreground">Explore our selection of robotics kits and components.</p>
              </div>
              <Link
                to="/products"
                className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-dark/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Robotic Arm Kit</h3>
                  <p className="text-muted-foreground">Build your own programmable robotic arm.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$149.99</span>
                        <Link to={"/products/122345"}
                        ><Button variant="contained" color="info" size="sm">Buy Now</Button></Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Wheeled Robot Kit</h3>
                  <p className="text-muted-foreground">Build your own Arduino-powered mobile robot.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$99.99</span>
                        <Link to={"/products/122345"}
                        ><Button variant="contained" color="info" size="sm">Buy Now</Button></Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Humanoid Robot Kit</h3>
                  <p className="text-muted-foreground">Build your own Arduino-powered humanoid robot.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$199.99</span>
                        <Link to={"/products/122345"}
                        ><Button variant="contained" color="info" size="sm">Buy Now</Button></Link>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="aspect-square object-cover rounded-lg"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold">Drone Kit</h3>
                  <p className="text-muted-foreground">Build your own Arduino-powered drone.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$129.99</span>
                        <Link to={"/products/122345"}
                        ><Button variant="contained" color="info" size="sm">Buy Now</Button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}