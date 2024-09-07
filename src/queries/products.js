import { useQuery } from "@tanstack/react-query";
import { FetchArduinoProducts, FetchElectronicsProducts, FetchRoboticsProducts, FetchSingleProduct } from "../api/db/products";

export const FetchRoboticsQuery = () => {
    return useQuery({
        queryKey: ['robotics_product'],
        queryFn: FetchRoboticsProducts,  // Remove the function call
    });
};

export const FetchArduinoQuery = () => {
    return useQuery({
        queryKey: ['arduino_product'],
        queryFn: FetchArduinoProducts,  // Remove the function call
    });
};

export const FetchElectronicsQuery = () => {
    return useQuery({
        queryKey: ['electronics_product'],
        queryFn: FetchElectronicsProducts,  // Remove the function call
    });
};

export const FetchSingleProductQuery = (slug) => {
    return useQuery({
        queryKey: ['products', slug],
        queryFn: () => FetchSingleProduct({ slug }),  // This is fine because it's an anonymous function
    });
};
