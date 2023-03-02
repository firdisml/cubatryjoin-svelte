

export const fetch_contests = async (limit:number) => {
    const url = "https://contestapi.up.railway.app/api/contest?skip=0&take="+limit;
    const res = await fetch(url);
    const data = await res.json();
    return data

}