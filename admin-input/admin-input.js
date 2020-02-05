const classEvent = {
    
    
    id:'parent',
    title:'Social Class',
    image:'',
    description:``,

    choices:[{
        
        id:'high-school',
        description:'High School or GED',
        result:'',
        health: 0,
        money: 0,
        mobility: 0,
    },
    {
        id:'associate',
        description:'Associates Degree',
        result:'',
        health: 5,
        money: 5,
        mobility: 5,
    },
    { id:'bachelors',
        description:'Bachelors Degree',
        result:'',
        health: 10,
        money: 5,
        mobility: 5,
    },
    {  
        id:'masters',
        description:'Masters Degree',
        result:'',
        health: 15,
        money: 20,
        mobility: 20,
    },
    {
        id:'phd',
        description:'Doctorate',
        result:'',
        health: 20,
        money: 25,
        mobility: 50,
    },
    {
        id:'professional-degree',
        description:'Technical or Professional Cerficate',
        result:'',
        health:10,
        money:25,
        mobility:25,
    }]
};

const facilitorEvent = [
    classEvent,

];
export default facilitorEvent;