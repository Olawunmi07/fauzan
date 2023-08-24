async function getRequest(){


const options = {
    method: 'get',
    headers: {
      "Content-Type": "application/json",
      "x-access-token": "token-value",
    }
  };
  
  try {
    const response = await fetch('/bezkoder.com/data', options);
  
    if (!response.ok) {
      const message = 'Error with Status Code: ' + response.status;
      throw new Error(message);
    }
  
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error: ' + err);
  }

}

async function postUserDetailsToServer(){
    let formData = new FormData();
formData.append('title', 'BezKoder Tutorial');
formData.append('description', 'Tut Desc');

try {
  const response = await fetch('/bezkoder.com/data', {
    method: "post",
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded"
    // },
    body: formData
  });

  if (!response.ok) {
    const message = 'Error with Status Code: ' + response.status;
    throw new Error(message);
  }

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.log('Error: ' + err);
}
}