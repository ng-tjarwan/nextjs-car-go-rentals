import { useQuery } from "@tanstack/react-query";

import { getAllCountries } from "@/services/location.service";

export const useCountries = () => {
  const {
    data: countries,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  return { countries, error, isLoading };
};
