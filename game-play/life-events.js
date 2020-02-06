const race = {


    id: 'race',
    title: 'The Human Race',
    image:'',
 
    description:`
    Race and ethnicity are socially constructed categories that have tangible effects on the lives of individuals who are defined by how one perceives one's self and how one is perceived by others. It is important to acknowledge the social construction (i.e., created from prevailing social perceptions, historical policies, and practices) of the concepts of race and ethnicity because it has implications for how measures of race have been used and changed over time. Furthermore, the concept of race is complex, with a rich history of scientific and philosophical debate as to the nature of race (James, 2016). Racial and ethnic disparities are arguably the most obstinate inequities in health over time, despite the many strides that have been made to improve health in the United States. Moreover, race and ethnicity are extremely salient factors when examining health inequity (Bell and Lee, 2011; Smedley et al., 2008; Williams et al., 2010). Therefore, solutions for health equity need to take into account the social, political, and historical context of race and ethnicity in this country.

    Analyzed rates of upward and downward mobility across generations for racial groups, we quantify how their incomes change and predict their future earnings trajectories.`
    ,
    choices:[{
        
        id:'White',
        description:'A person having origins in any of the original peoples of Europe, the Middle East, or North Africa; has no Hispanic or Latino origins.',
        result:'',
        health: 91,
        money:100,
        mobility:80,
    },
    {
        id:'Black',
        description:'A person having origins in any of the black racial groups of Africa; has no Hispanic or Latino origins.',
        result:'',
        health:87,
        money:80,
        mobility:60,
    },
    {   
        //i went with Asian rather than Pacific Islander
        id:'Asian',
        description:'A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian Subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam; has no Hispanic or Latino origins.',
        result:'',
        health:100,
        money:100,
        mobility:100,
    },
    { id:'Native American',
        description:'A person having origins in any of the original peoples of North and South America (including Central America) who maintains cultural identification through tribal affiliation or community attachment; has no Hispanic or Latino origins.',
        result:'',
        health:76,
        money:70,
        mobility:50,
    },
    { id:'Hispanic or Latino',
        description:'A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race.',
        result:'',
        health:96,
        money:80,
        mobility:75,
    },
    { id:'Two or More Races',
        description:'This applies only to those who are Non-Hispanic or Latino.',
        result:'',
        health:92,
        money:80,
        mobility:80,
    },
    { id:'Native Hawaiian or Other Pacific Islander',
        description:'A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands; has no Hispanic or Latino origins.',
        result:'',
        health:80,
        money:75,
        mobility:75,
    }]
};

const genderIdentity = {


    id:'Gender',
    title:'Gender Identity',
    image:'Gender-Diversity.jpg',
    description:'',
    
    choices:[{
        
        id:'Male',
        description:'Men make about 18% more than there female counterparts in the job market. They are also more likely to ask for and receive raises for the work they do. This is despite studies that show women work harder and more efficiently. ',
        result:'',
        health:-5,
        money:+20,
        mobility:+20,
    },
    {
        id:'Female',
        description:'',
        result:`
        Women generally live longer than males – on average by six to eight years. This difference is partly due to an inherent biological advantage for the female, but it also reflects behavioral differences between men and women.`,
        health:5,
        money:0,
        mobility:+5,
    },
    { id:'Trans',
        description:'Trans-gender',
        result:'',
        health:-10,
        money:-5,
        mobility: 5,
    },
    {
        id:'Gender-queer',
        description:'',
        result:'',
        health:-5,
        money: 0,
        mobility: 0,
    },
    {
        id:'Non-binary',
        description:'',
        result:'',
        health: 0,
        money: 0,
        mobility: 0,
    }],
};
const environmentalConditions = {


    id:'Geographic-Environmental-Conditions',
    title:"Environments of Success",
    image:'Geography.jpg',
    description:'',
    
    choices:[{
        
        id:'West-coast',
        description:'',
        result:'',
        health:10,
        money:5,
        mobility:5,
    },
    {
        id:'East-coast',
        description:'',
        result:'',
        health:10,
        money:10,
        mobility:5,
    },
    {   
        id:'South',
        description:'',
        result:'',
        health:-5,
        money:-5,
        mobility:-10,
    },
    {   
        id:'Mid-West',
        description:'',
        result:'',
        health: 10,
        money: 10,
        mobility: 5,
    }]
};

const educationEvent = {
    id:'EducationEvent',
    title:'Degrees of Education',
    image:'',
    description:`Research shows that the greatest single correlation of high income is the education level of one's parents.
    The Fed study showed that income, earnings, and wealth increased with education levels.`,
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
const trafficEvent = {
    id:'',
    title:'Traffic Stop',
    image:'',
    description:`You are driving down the highway. You are driving the speed limit, your car is fully functional and your registration, insurance, and drivers liscense are valid. You are preparing to take the next exit, when you look in your rear view mirror and notice that a police officer is following you. The officer, turns on their lights and sirens and in accordance with the law you pull your car over to the side of the road as quickly as you can and in a safe location. The officer approaches your vehicle and you roll down the window. The officer, tells you that you were speeding. How do you respond?`,
    choices:[{
        id:'comply',
        description:'Comply with the officer',
        result:'',
        health:-5,
        money:1,
        mobility:1,
    },
    {
        id:'silent',
        description:'Stay silent',
        result:``,
        health:0,
        money:1,
        mobility:1,
    },
    {   id:'argue',
        description:'Agrue with the',
        result:'',
        health:1,
        money:1,
        mobility:1,
    }]
};
const medicalEvent = {
    id:'arm-injury',
    title:'',
    image:'',
    description:`You were walking and tripped on a curb. You fall and break your arm. The break is serious and you need immediate medical attention. What do you do?`,
    choices:[{
        id:'heal',
        description:'Let it heal on it\'s own',
        result:'',
        health:-5,
        money:1,
        mobility:1,
    },
    {
        id:'call',
        description:' Call the ambulance to the hospital',
        result:``,
        health:0,
        money:1,
        mobility:1,
    },
    {   id:'taxi',
        description:'Call a Taxi to the hospital',
        result:'',
        health:1,
        money:1,
        mobility:1,
    },
    {   id:'drive',
        description:'Drive yourself to the hospital',
        result:'',
        health:1,
        money:1,
        mobility:1,
    }]
};
const HousingEvent = {
    id:'housing-choice',
    title:'',
    image:'',
    description:'You just got a job in a new city and need to find housing. There are a number of options, what do you do?',
    choices:[{
        id:'roommate',
        description:'Find a roommate',
        result:'',
        health:-5,
        money:1,
        mobility:1,
    },
    {
        id:'five-miles',
        description:' Call the ambulance to the hospital',
        result:``,
        health:0,
        money:1,
        mobility:1,
    },
    {
        id:'ten-miles',
        description:'Call a Taxi to the hospital',
        result:'',
        health:1,
        money:1,
        mobility:1,
    },
    {
        id:'twenty-miles',
        description:'Drive yourself to the hospital ',
        result:'',
        health:1,
        money:1,
        mobility:1,
    }]
};
const EmployementEvent = {
    id:'employement-issue',
    title:'',
    image:'',
    description:'You are working at your desk at a new job when your boss asks you to come into their office. They propose that if you are interested they have an opportunity that will increase your earnings. As they tell you about this opportunity you realize that this against not only company HR policy but also against the law. What do you do?',
    choices:[{
        id:'agree',
        description:'Find a roommate',
        result:'1',
        health:-5,
        money:1,
        mobility:1,
    },
    {
        id:'avoid',
        description:' Call the ambulance to the hospital',
        result:``,
        health:0,
        money:1,
        mobility:1,
    },
    {
        id:'disagree',
        description:'Call a Taxi to the hospital',
        result:'',
        health:1,
        money:1,
        mobility:1,
    },
    {
        id:'find-job',
        description:'Drive yourself to the hospital ',
        result:'',
        health:1,
        money:1,
        mobility:1,
    }]
};
const lifeEvents = [
    race,
    genderIdentity,
    environmentalConditions,
    educationEvent,
    trafficEvent,
    medicalEvent,
    // housingEvent,
    // employementEvent,
];
export default lifeEvents;