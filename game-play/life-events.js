const race = {


    id: 'race',
    title: 'The Human Race',
    image: 'race.jpeg',
    description: 'Race and ethnicity are socially constructed categories that have tangible effects on the lives of individuals who are defined by how one perceives one\'s self and how one is perceived by others. How will you racially identity?',

    choices: [{

        id: 'White',
        description: 'A person having origins in any of the original peoples of Europe, the Middle East, or North Africa; has no Hispanic or Latino origins.',
        result: '',
        health: -9,
        wealth: 0,
        mobility: -20,
    },
    {
        id: 'Black',
        description: 'A person having origins in any of the black racial groups of Africa; has no Hispanic or Latino origins.',
        result: 'The Economic Policy Institute reported that 25% of black households have zero or negative net worth. Only 10% of white families are that poor. Since so many black families own nothing or are in debt, it drags down average wealth for the entire race. As a result, black families have $5.04 in net worth for every $100 held by white families.',
        health: -13,
        wealth: -20,
        mobility: -40,
    },
    {
        id: 'Asian',
        description: 'A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian Subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam; has no Hispanic or Latino origins.',
        result: 'Life expectancies are high in Hawaii, primarily because of the high concentration of population of Asian-Americans and a healthy diet. Asian-Americans also live in the Northeast corridor and contribute to an increase in life expectancy there.',
        health: 0,
        wealth: 0,
        mobility: 0,
    },
    {
        id: 'Native American',
        description: 'A person having origins in any of the original peoples of North and South America (including Central America) who maintains cultural identification through tribal affiliation or community attachment; has no Hispanic or Latino origins.',
        result: '',
        health: -24,
        wealth: -30,
        mobility: -50,
    },
    {
        id: 'Hispanic or Latino',
        description: 'A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin, regardless of race.',
        result: '',
        health: -4,
        wealth: -20,
        mobility: -25,
    },
    {
        id: 'Two or More Races',
        description: 'This applies only to those who are Non-Hispanic or Latino.',
        result: '',
        health: -8,
        wealth: -20,
        mobility: -20,
    },
    {
        id: 'Native Hawaiian or Other Pacific Islander',
        description: 'A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands; has no Hispanic or Latino origins.',
        result: '',
        health: -20,
        wealth: -25,
        mobility: -25,
    }]
};

const genderIdentity = {


    id: 'Gender',
    title: 'Gender Identity',
    image: 'gender.jpeg',
    description: 'There are tangible effects on the lives of individuals who are defined by how one perceives one\'s self and how one is perceived by others. What gender orientaion will you identify with?',


    choices: [{

        id: 'Male',
        description: '',
        result: 'Men make about 18% more than there female counterparts in the job market. They are also more likely to ask for and receive raises for the work they do. This is despite studies that show women work harder and more efficiently.',
        health: -5,
        wealth: 0,
        mobility: -20,
    },
    {
        id: 'Female',
        description: '',
        result: 'Women generally live longer than males – on average by six to eight years. This difference is partly due to an inherent biological advantage for the female, but it also reflects behavioral differences between men and women.',
        health: -5,
        wealth: -18,
        mobility: -5,
    },
    {
        id: 'Trans',
        description: 'Trans-gender',
        result: '',
        health: -10,
        wealth: -5,
        mobility: -5,
    },
    {
        id: 'Gender-queer',
        description: '',
        result: '',
        health: -5,
        wealth: -5,
        mobility: 5,
    },
    {
        id: 'Non-binary',
        description: '',
        result: '',
        health: -10,
        wealth: -5,
        mobility: 5,
    }],
};
const environmentalConditions = {


    id: 'Geographic-Environmental-Conditions',
    title: 'Environments of Success',
    image: 'location.jpeg',
    description: 'Where you start in life affects where you get -- educationally and economically -- in a big way. In sprawling metros of the South, residential segregation influences school quality, housing options, and transportation, and a disconnect often exists between low- and moderate-income neighborhoods and the location of good jobs. Where will you live?',

    choices: [{

        id: 'West-coast',
        description: '',
        result: '',
        health: 10,
        wealth: 5,
        mobility: 5,
    },
    {
        id: 'East-coast',
        description: '',
        result: '',
        health: 10,
        wealth: 10,
        mobility: 5,
    },
    {
        id: 'South',
        description: '',
        result: 'The South has high levels of poverty, but with increasing economic segregation, poverty is increasingly concentrated in particular neighborhoods. A report on concentrated poverty from The Century Foundation found that 4.6 million Southerners live in high-poverty neighborhoods—an increase of 66 percent or 1.8 million since 2000. Charlotte and Raleigh—two Southern metros ranked highly for business but poorly for mobility—both saw their poverty rates nearly double in the last decade.',
        health: -5,
        wealth: -5,
        mobility: -10,
    },
    {
        id: 'Mid-West',
        description: '',
        result: '',
        health: -5,
        wealth: 5,
        mobility: 5,
    }]
};

const educationEvent = {
    id: 'EducationEvent',
    title: 'Degrees of Education',
    image: 'education.jpeg',
    result: 'Education is also a powerful factor in improving economic mobility. Education increases the income that generates greater economic growth. Over a lifetime, Americans with college degrees earn 84% more than those with only high school degrees.',
    description: 'Research shows that the greatest single correlation of high income is the education level of one\'s parents. The Fed study showed that income, earnings, and wealth increased with education levels. What type of education will your recieve?',

    choices: [{
        id: 'high-school',
        description: 'High School or GED',
        result: '',
        health: 2,
        wealth: -10,
        mobility: 3,
    },
    {
        id: 'associate',
        description: 'Associates Degree',
        result: '',
        health: 5,
        wealth: 5,
        mobility: 5,
    },
    {
        id: 'bachelors',
        description: 'Bachelors Degree',
        result: '',
        health: 10,
        wealth: 5,
        mobility: 5,
    },
    {
        id: 'masters',
        description: 'Masters Degree',
        result: '',
        health: 15,
        wealth: 20,
        mobility: 20,
    },
    {
        id: 'phd',
        description: 'Doctorate',
        result: '',
        health: 20,
        wealth: 25,
        mobility: 50,
    },
    {
        id: 'professional-degree',
        description: 'Technical or Professional Cerficate',
        result: '',
        health: 10,
        wealth: 25,
        mobility: 25,
    }]
};

const employementEvent = {
    id: 'employement-issue',
    title: 'On the Job',
    image: 'employment.jpeg',
    description: 'You are working at your desk at a new job when your boss asks you to come into their office. As you take a seat, they start telling you about an opportunity that will increase your earnings, dramatically, overnight. It sounds too good to be true. As you listen, you realize your bosses proposal is not only against company HR policy, but this "opportunity" is against the law. Your boss hints that if you decline you will likely be fired. What do you do?',
    choices: [{
        id: 'accept',
        description: 'You decide to accept their offer, you aren\'t concerned with the consequences.',
        result: '',
        health: -5,
        wealth: 1,
        mobility: 1,
    },
    {
        id: 'decline',
        description: 'You are offended by your bosses offer. You quickly cite the laws they would be breaking and kindly decline. You also encourage your boss to reconsider their plan.',
        result: '',
        health: 0,
        wealth: 1,
        mobility: 1,
    },
    {
        id: 'hr',
        description: 'You thank your boss for offering you the opportunity and ask if they would give you the opportunity to cosider the offer. You leave their office and immediately go to HR and file a formal complaint.',
        result: '',
        health: 1,
        wealth: -10,
        mobility: 1,
    },
    {
        id: 'quit',
        description: 'You get a sinking feeling that you are in a lose lose situation. If you accept, you will be breaking the law. If you decline and stay quiet, your boss will likely fire you on some trumped up violation. You decide to quit and take your chances finding another job.',
        result: '',
        health: -10,
        wealth: 5,
        mobility: 1,
    }]
};

const lifeEvents = [
    race,
    genderIdentity,
    environmentalConditions,
    educationEvent,
    employementEvent,
];

export default lifeEvents;