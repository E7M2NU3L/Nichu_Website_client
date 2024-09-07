import { Box, Button, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { FetchElectronicsQuery, FetchRoboticsQuery, FetchArduinoQuery } from "../queries/products";
import React from "react";

export default function Products() {
  const {
    isPending: isFetchingElectronics,
    isError: isFailedToFetchElectronics,
    data: electronicsData,
    error: electronicsError,
  } = FetchElectronicsQuery();
  const {
    isPending: isFetchingArduino,
    isError: isFailedToFetchArduino,
    data: arduinoData,
    error: arduinoError,
  } = FetchArduinoQuery();
  const {
    isPending: isFetchingRobotics,
    isError: isFailedToFetchRobotics,
    data: roboticsData,
    error: roboticsError,
  } = FetchRoboticsQuery();

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

      {/* Electronics Section */}
      <ProductSection
        title="Electronics"
        description="Explore our collection of cutting-edge electronics."
        isFetching={isFetchingElectronics}
        isError={isFailedToFetchElectronics}
        data={electronicsData}
        error={electronicsError}
      />

      {/* Arduino Section */}
      <ProductSection
        title="Arduino Kits"
        description="Explore our selection of Arduino-based project kits."
        isFetching={isFetchingArduino}
        isError={isFailedToFetchArduino}
        data={arduinoData}
        error={arduinoError}
      />

      {/* Robotics Section */}
      <ProductSection
        title="Robotics"
        description="Explore our selection of robotics kits and components."
        isFetching={isFetchingRobotics}
        isError={isFailedToFetchRobotics}
        data={roboticsData}
        error={roboticsError}
      />
    </div>
  );
}

function ProductSection({ title, description, isFetching, isError, data, error }) {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <Link
              to="/products"
              className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View All
            </Link>
          </div>

          {isFetching ? (
            <div className="flex flex-wrap gap-4">
              <LoaderComponent count={4} />
            </div>
          ) : isError ? (
            <div>Error loading products: {error.message}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {data?.map((content, index) => (
                <ProductCard key={index} content={content} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function LoaderComponent({ count }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Box key={index}>
          <Skeleton variant="rectangular" width={300} height={300} />
          <Skeleton width="80%" />
          <Skeleton width="60%" />
        </Box>
      ))}
    </>
  );
}

function ProductCard({ content }) {
  return (
    <div className="grid gap-4">
      <img
        src={content?.thumbnail || "/placeholder.svg"}
        alt="Product Image"
        width={300}
        height={300}
        className="aspect-square object-cover rounded-lg"
      />
      <div className="space-y-2">
        <h3 className="font-semibold">{content?.title}</h3>
        <p className="text-muted-foreground line-clamp-3">{content?.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold">$69.99</span>
          <Link to={`/products/${content?.$id}`}>
            <Button variant="contained" color="info" size="small">
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
