//this is a future module for admin entering new questions on class event simulation.
const classEvent = {
    
    
    id:'parent-incomes',
    title:'Social Class',
    image:'',
    description:``,

    choices:[{
        
        id:'high-school',
        description:'High School or GED',
        result:'',
        health: 0,
        wealth: 0,
        mobility: 0,
    },
    {
        id:'associate',
        description:'Associates Degree',
        result:'',
        health: 5,
        wealth: 5,
        mobility: 5,
    },
    { id:'bachelors',
        description:'Bachelors Degree',
        result:'',
        health: 10,
        wealth: 5,
        mobility: 5,
    },
    {  
        id:'masters',
        description:'Masters Degree',
        result:'',
        health: 15,
        wealth: 20,
        mobility: 20,
    },
    {
        id:'phd',
        description:'Doctorate',
        result:'',
        health: 20,
        wealth: 25,
        mobility: 50,
    },
    {
        id:'professional-degree',
        description:'Technical or Professional Certificate',
        result:'',
        health:10,
        wealth:25,
        mobility:25,
    }]
};

const facilitorEvent = [
    classEvent,

];
export default facilitorEvent;