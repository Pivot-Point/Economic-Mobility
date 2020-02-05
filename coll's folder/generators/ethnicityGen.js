// gen form for name/ethnicity/gender/region

function genEthnicityOptions (arr) {
    for ( let i=0; i < arr.length; i++) {
        const dom = document.getElementById('ethnicityForm');
        const option = document.createElement('input');
        //add radio butto type/name/value(enthicity object id) and id
        option.type = radio;
        option.name = ethnicityRadioButton;
        option.value = arr[i].id;
        option.id = arr[i].psuedoId;
        //not yet established

        dom.appendChild(option);
    }
}