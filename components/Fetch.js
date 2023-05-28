
export const Fetch = ({
  url,
  renderSuccess,
  loadingFallback = <p>...loading</p>,
  renderError = error => <pre>{JSON.stringify(error, null, 2)}</pre>
}) => {
  const {loading, data, error} = useFetch(url)
  if (loading) return loadingFallback
  if (error) return renderError(error)
  if (data) return renderSuccess({data})
};
