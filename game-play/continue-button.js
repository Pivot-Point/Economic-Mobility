const continuebutton = document.getElementById('Fubar');
continuebutton.addEventListener ( 
    'click', () => {
        FubarBox.style.display = 'hidden';

        genQuestion(array[0]);
        
    }
);