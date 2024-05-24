function getInfo() {
    const submitElement = document.getElementById('submit');
    const stopIdElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    let bussesElement = document.getElementById('buses');
  
    const urlBusInfo = 'http://localhost:3030/jsonstore/bus/businfo';
    while (bussesElement.firstChild) {
        bussesElement.removeChild(bussesElement.firstChild);
    }
    
    fetch(`${urlBusInfo}/${stopIdElement.value}`)
        .then((response) => response.json())
        .then((data) => {
            stopNameElement.textContent = data.name;
            for (const bus in data.buses) {
                let listItem = document.createElement('li');
                listItem.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
                bussesElement.appendChild(listItem);
            }
            stopIdElement.value = '';

        }
        
        )
        .catch(() => {
            stopNameElement.textContent = 'Error'
        })



    
}