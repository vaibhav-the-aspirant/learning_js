const temperature = document.querySelectorAll('.temp')
console.log(temperature)
const cel = document.querySelector('#celsius')
const fahren = document.querySelector('#fahrenheit')
const kel = document.querySelector('#kelvin')



temperature.forEach((temp) => {
    console.log(temp)
    temp.addEventListener('keydown', function(e) {
        if(e.key==="Enter"){
            // console.log(e.target)

            switch(e.target.id){
                case 'celsius':
                    const celsius = parseFloat(e.target.value);
                    // console.log('celsius: ',celsius)
                    let celToFaher = (celsius * (9/5))+32;
                    // console.log(fahren)
                    fahren.value = celToFaher.toFixed(2);
                    let celToKel = celsius + 273.15;
                    kel.value = celToKel.toFixed(2);
                    break;

                case 'fahrenheit':
                    console.log('input in faherenheit');
                    const faherenheit = parseFloat(e.target.value);
                    let fahrenToCel = (faherenheit-32)/1.8;
                    cel.value = fahrenToCel.toFixed(2);
                    let fahrenToKel = fahrenToCel + 273.15;
                    kel.value = fahrenToKel;
                    break;

                case 'kelvin':
                    console.log('input in kelvin')
                    const kelvin = parseFloat(e.target.value)
                    let kelToCel = kelvin - 273.15;
                    cel.value = kelToCel.toFixed(2)
                    let kelToFahren = (kelToCel * (9/5))+32;
                    fahren.value = kelToFahren.toFixed(2); 
                    break;
                default:
                    console.log('nothing filled')
            }
        } 
    })
})