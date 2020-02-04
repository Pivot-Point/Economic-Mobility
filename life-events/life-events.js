
export const trafficStop = {
const education = {
    
    
    id:'Education',
    title:'Degrees of Education',
    image:'education.png',
    description:`Research shows that the greatest single correlation of high income is the education level of one's parents.
    The Fed study showed that income, earnings, and wealth increased with education levels.`,

    choices:[{
        
        id:'High-School',
        description:'',
        result:'',
        health: 0,
        money: 0,
        mobility: 0,
    },
    {
        id:'Associate',
        description:'',
        result:'',
        health: 5,
        money: 5,
        mobility: 5,
    },
    { id:'Bachelors',
        description:'',
        result:'',
        health: 10,
        money: 5,
        mobility: 5,
    },
    {  
        id:'Masters',
        description:'',
        result:'',
        health: 15,
        money: 20,
        mobility: 20,
    },
    {
        id:'PhD',
        description:'',
        result:'',
        health: 20,
        money: 25,
        mobility: 50,
    },
    {
        id:'Professional Degree',
        description:'',
        result:'',
        health:10,
        money:25,
        mobility:25,
    }]
};
      
const trafficStop = {

    id:'',
    title:'Traffic-stop',
    image:'',
    description:`You are driving down the highway. You are driving the speed limit, your car is fully functional and your registration, insurance, and drivers liscense are valid. You are preparing to take the next exit, when you look in your rear view mirror and notice that a police officer is following you. The officer, turns on their lights and sirens and in accordance with the law you pull your car over to the side of the road as quickly as you can and in a safe location. The officer approaches your vehicle and you roll down the window. The officer, tells you that you were speeding. How do you respond?`,
    
    choices:[{
        
        id:'comply,
        description:'',
        result:'',
        health:-5,
        money:,
        mobility:,
    },
    {
        id:'silent',
        description:'',
        result:`
        Women generally live longer than males – on average by six to eight years. This difference is partly due to an inherent biological advantage for the female,but it also reflects behavioural differences between men and women.`,
        health:0,
        money:,
        mobility:,
    },
    {   id:'Argue',
        description:'Trans-gender',
        result:'',
        health:,
        money:,
        mobility:,
    }
    }]
};
const medicalIssue = {

    id:'medicalEvent',
    title:'',
    image:'',
    description:`You were walking and tripped on a curb. You fall and break your arm. The break is serious and you need immediate medical attention. What do you do?`,
    
    choices:[{
        
        id:',
        description:'Let it heal on it\'s own',
        result:'',
        health:-5,
        money:,
        mobility:,
    },
    {
        id:'silent',
        description:' Call the ambulance to the hospital',
        result:`
        Women generally live longer than males – on average by six to eight years. This difference is partly due to an inherent biological advantage for the female,but it also reflects behavioural differences between men and women.`,
        health:0,
        money:,
        mobility:,
    },
    {   id:'Argue',
        description:'Call a Taxi to the hospital',
        result:'',
        health:,
        money:,
        mobility:,
    }
    {   id:'Argue',
        description:'Drive yourself to the hospital ',
        result:'',
        health:,
        money:,
        mobility:,
    }]
};
     const economicMobility = [
    
        educationEvent,
        trafficEvent, 
        medicalEvent,
    ];
    export default economicMobility;