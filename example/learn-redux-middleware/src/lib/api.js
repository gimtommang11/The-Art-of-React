// api를 호출하는 함수 따로 생성, 가독성과 유지보수할때 좋음. 
import axios from 'axios';

export const getPost = id => { //다른 파일에서 이를 import해서 사용함
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
}

export const getUsers = id => {
  axios.get(`https://jsonplaceholder.typicode.com/users`);
}