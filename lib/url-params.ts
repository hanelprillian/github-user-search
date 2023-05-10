export function urlWithParams(url: string, params: any) {
  const endpoint = new URL(url);
  endpoint.search = new URLSearchParams(params).toString();
  return endpoint;
}
