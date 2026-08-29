const getImagePrefix = () => {
  // Use basePath from environment variable (set in next.config.mjs)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return basePath ? `${basePath}/` : "";
};

export { getImagePrefix };
 
