// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchData(url) {
	return fetch(url).then((response)=>response.json());
}
function timePromise(promise) {
	const start = performance.now();
	return promise.then((data)=>{
		console.log(data);
		return performance.now()-start
	});
}
function fetchAll() {
	const start = performance.now();
	const promises = apiUrls.map(fetchData);
	return Promise.all(promises).then(()=>performance.now());
}
function fetchAny() {
	const start = performance.now();
	const promises = apiUrls.map(fetchData);
	return Promise.any(promises).then(()=>performance.now());
}
Promise.all([timePromise(fetchAll()),timePromise(fetchAny())]).then(
  ([timeAll, timeAny]) => {
    document.getElementById("output-all").innerText = timeAll;
    document.getElementById("output-any").innerText = timeAny;
  }
);