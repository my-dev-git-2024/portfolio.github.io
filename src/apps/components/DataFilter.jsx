import projectOne from '../../assets/images/smile4kids.png';
import projectTwo from '../../assets/images/starlingbags.png';
import projectThree from '../../assets/images/aahasolution.png';
import projectFour from '../../assets/images/ckpetsworld.png';

export const images  = [
  { 
    id: 1, 
    name: 'Smile4Kids', 
    category: 'CategoryA',
    imageUrl : projectOne,
    url : 'https://smile4kids.co.uk/' 
},

  { 
    id: 2, 
    name: 'StarlingbagsNI', 
    category: 'CategoryA' ,
    imageUrl : projectTwo,
    url : 'https://starlingbagsni.co.uk/' 
},
  { 
    id: 3, 
    name: 'AAHA Solutions', 
    category: 'CategoryA',
    imageUrl : projectThree ,
    url : 'https://aahasolutions.com/' 
},
    { 
    id: 4, 
    name: 'CK Pets World', 
    category: 'CategoryB',
    imageUrl : projectFour ,
    url : 'https://ckpetsworld.com/' 
},
  // Add more items as needed
];

export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "CODING", value: "CategoryA" },
  { id: 3, name: "WORDPRESS", value: "CategoryB" },
]
