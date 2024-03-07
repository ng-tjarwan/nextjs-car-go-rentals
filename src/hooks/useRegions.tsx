import { useQuery } from "@tanstack/react-query";

import { getRegionsByCountryId } from "@/services/location.service";

export const useRegions = (country_id?: number) => {
  const {
    data: regions,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["regions",country_id],
    queryFn: () => getRegionsByCountryId(country_id),
  });

  return { regions, error, isLoading };
};
