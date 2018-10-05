import designerCupSvg from '../../../assets/svg/designer-cup.svg';
import windowsSvg from '../../../assets/svg/windows.svg';
import serverSvg from '../../../assets/svg/server.svg';

const data = {
    title: 'What About Me?',
    intro: 'I\'m a passionate web developer with more than 6 years of experience. I\'ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I actively seek out new technologies and stay up-to-date on industry trends and advancements.',
    articleUx: {
        image: designerCupSvg,
        title: 'Designing',
        desc: 'I love to create resposive websites with simple designs and intuitive.',
        tools: [
            {
                title: 'Design Tools',
                items: [
                    'Sketch',
                    'Adobe Photoshop',
                    'InVision',
                    'Visio 2016'
                ]
            }
        ]
    },
    articleFrontend: {
        image: windowsSvg,
        title: 'Front-end Development',
        desc: 'I love to code things from scratch, and enjoy bringing ideas to life in the browser.',
        tools: [
            {
                title: 'Favorites',
                items: [
                    'HTML5',
                    'CSS3',
                    'JavaScript ES6',
                    'ReactJS',
                    'Redux',
                    'Styled Components',
                    'Webpack 4',
                    'Sass'
                ]
            },
            {
                title: 'Others',
                items: [
                    'AngularJS',
                    'KnockoutJS',
                    'BackboneJS',
                    'Bootstrap',
                    'MaterializeCSS',
                    'Foundation'
                ]
            }
        ]
    },
    articleBackend: {
        image: serverSvg,
        title: 'Back-end Development',
        desc: 'I love communicating to client side and manipulating dynamic data.',
        tools: [
            {
                title: 'Favorites',
                items: [
                    'NodeJS',
                    'ExpressJS',
                    'RESTful Web Services',
                    'Postgres'
                ]
            },
            {
                title: 'Others',
                items: [
                    'C#',
                    'MSSQL',
                    'Web API 2',
                    'Entity Framework'
                ]
            }
        ]
    }
};

export default data;
