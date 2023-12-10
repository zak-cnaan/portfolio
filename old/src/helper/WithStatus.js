const WithStatus = (Component) => {
  return ({ data, status, error }) => {
    if (status === "succeeded") return <Component posts={data} />;
    if (status === "loading") return <span>Loading ...</span>;
    if (status === "failed") return <span>{error}</span>;
  };
};

export default WithStatus;
