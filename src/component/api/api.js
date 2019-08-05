
const fetchData = async () =>{
    try{
        const response = await fetch('https://reactjs-cdp.herokuapp.com/movies/');
        const dataDetail = await response.json();
        console.log(dataDetail);
        return dataDetail;
    } catch (e) {
        console.log(e);
    }   
}
export { fetchData };