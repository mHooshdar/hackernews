const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

export default async function myFetch<T>(url: string): Promise<T> {
  const res = await fetch(url.startsWith('/') ? BASE_URL + url : url);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
