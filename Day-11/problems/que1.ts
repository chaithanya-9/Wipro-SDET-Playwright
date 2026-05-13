// 1. The Generic API Wrapper
// Scenario: You need a reusable function to fetch data that automatically types the response.
// Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.

async function fetchData<T>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Network failed");
    }
    const data: T = await res.json();
    return data;
}

interface Animal {
    userId: number,
    id: number,
    title: string
}

async function getResult() {
    const animal = await fetchData<Animal>("https://jsonplaceholder.typicode.com/albums/1");

    console.log(`userId: ${animal.userId}\ntitle: ${animal.title}`);
}
getResult();