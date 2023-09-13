import { useQuery } from "@apollo/client";

// Custom query hook
const useCustomQuery = (query, variables) => {
  const { data, loading, error } = useQuery(query, variables);

  return { data, loading, error };
};

export default useCustomQuery;
