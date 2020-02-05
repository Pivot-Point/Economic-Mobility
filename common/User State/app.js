const race = {


    id: 'race',
    title: 'The Human Race',
    image:'race.jpg',
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
        id:'Asian or Pacific Islander',
        description:'A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian Subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam; has no Hispanic or Latino origins.',
        result:'',
        health:100,
        money:100,
        mobility:100,
    },
    { id:'Native American or Indian',
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
    title:'Environments of Success',
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

const characterObject = [

    race,
    genderIdentity,
    environmentalConditions,

];
export default characterObject;