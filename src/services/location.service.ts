import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { ICountryProps, IRegionProps } from "@/models";
import { Database } from "@/models/supabase";

const supabase = createClientComponentClient<Database>();

export const getAllCountries = async (): Promise<ICountryProps[]> => {
  try {
    const { data: countries } = await supabase.from("countries").select("*");
    return countries as ICountryProps[];
  } catch (error) {
    throw new Error("Countries could not be loaded");
  }
};

export const getRegionsByCountryId = async (
  country_id?: number
): Promise<IRegionProps[]> => {
  try {
    if (country_id) {
      const { data: regions } = await supabase
        .from("regions")
        .select("*")
        .eq("country_id", country_id);
      return regions as IRegionProps[];
    }

    return [];
  } catch (error) {
    throw new Error("Regions could not be loaded");
  }
};
