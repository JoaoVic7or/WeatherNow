export async function fetchData(cidade: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=3c113e590e40568e4674ee6990b9fe3a&lang=pt_br&units=metric`
  );
  try {
    const data = await response.json();
    console.log(data)
    if(data.cod == '404'){
      alert('Cidade não encontrada!')
    }
    else{
      return data;
    }
  }
  catch (error){
    console.log(error)
  }
}