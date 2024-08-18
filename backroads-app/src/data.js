import img1 from './images/tour-1.jpeg' 
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'
import img5 from './images/tour-5.jpeg'
import img6 from './images/tour-6.jpeg'


export const PageLinks = [
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#about', text:'about'},
    {id:3, href:'#services', text:'services'},
    {id:4, href:'#tours', text:'tours'}]

export const SocialLinks =[
    {id:1, href:'https://www.facebook.com', className:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', className:"fab fa-twitter"},
    {id:3, href:'https://www.squarespace.com', className:"fab fa-squarespace"}
]

export const Service =[
    {id:1, 
    icon:'fas fa-wallet fa-fw', 
    title:'saving money', 
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.' },
    {id:2, 
    icon:'fas fa-tree fa-fw', 
    title:'endless hiking', 
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'
    },
    {id:3, 
    icon:'fas fa-socks fa-fw', 
    title:'amazing comfort', 
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'}]

export const Tour =[
    {id:1,
    img: img1,
    date:'august 26th, 2020',
    text:'Tibet Adventure',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    place:'china',
    days:'6 days',
    price:'from $2100'
    },
    {id:2,
    img:img2,
    date:'october 1th, 2020',
    text:'best of java',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    place:'indonesia',
    days:'11 days',
    price:'from $1400'
    },
    {id:3,
    img:img3,
    date:'september 15th, 2020',
    text:'explore hong kong',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    place:'hong kong',
    days:'8 days',
    price:'from $5000'
    },
    {id:4,
    img:img4,
    date:'december 5th, 2019',
    text:'kenya highlights',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    place:'kenya',
    days:'20 days',
    price:'from $3300'
    },
    {id:5,
    img:img5,
    date:'Auguest 12th, 1997',
    text:'Wildlife Adventure',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    place:'ireland',
    days:'15 days',
    price:'from $1500'
    },
    {id:6,
    img:img6,
    date:'June 1st, 2001',
    text:'Beauty of Taj Mahal',
    info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    place:'India',
    days:'25 days',
    price:'from $2000'}]
