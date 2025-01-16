
export interface ApartmentSearchProps {
    onSearch: (
        status: string,
        minPrice: number | null,
        maxPrice: number | null
    ) => void;
    priceRange: {
        min: number;
        max: number;
    };
}
