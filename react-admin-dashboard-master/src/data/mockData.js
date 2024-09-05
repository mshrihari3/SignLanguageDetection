import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "root",
    email: "root@signdetect.com",
    age: 1,
    phone: "(555)123-1234",
    access: "admin",
  },
  {
    id: 2,
    name: "Shrihari Murali",
    email: "shrihari@signdetect.com",
    age: 25,
    phone: "(421)314-2288",
    access: "manager",
  }
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Admin",
    email: "admin@signetect.com",
    age: 1,
    phone: "(555)123-1234",
    address: "React",
    city: "Web Browser",
    zipCode: "000000",
    registrarId: 111111,
  },
  {
    id: 2,
    name: "Shrihari Murali",
    email: "shrihari@signdetect.com",
    age: 25,
    phone: "(213)756-6081",
    address: "325 W Adams Blvd",
    city: "Los Angeles",
    zipCode: "90007",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    registrarId: 123512,
  }
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    cost: "AUTH",
  },
  {
    txId: "0315dsb",
    user: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    cost: "AUTH",
  },
  {
    txId: "78rt109",
    user: "Mozilla/5.0 (X11; Ubuntu; Linux x86_64)",
    cost: "NOAUTH",
  },
  {
    txId: "51034sv",
    user: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X)",
    cost: "AUTH",
  },
  {
    txId: "0a123sb",
    user: "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36",
    cost: "NOAUTH",
  },
  {
    txId: "u81v90i",
    user: "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4)",
    cost: "NOAUTH",
  },
  {
    txId: "120s51a",
    user: "Mozilla/5.0 (Linux; Android 11; SM-G991B)",
    cost: "NOAUTH",
  },
  {
    txId: "j9ol120l",
    user: "Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X)",
    cost: "AUTH",
  },
];

export const mockBarData = [
  {
    country: "IND",
    no: 1434,
    noColor: "purple",
    yes: 1283,
    yesColor: "blue",
    hello: 912,
    helloColor: "red",
    thankyou: 1226,
    thankyouColor: "yellow",
    iloveyou: 1281,
    iloveyouColor: "lime"
  },
  {
    country: "USA",
    no: 523,
    noColor: "purple",
    yes: 712,
    yesColor: "blue",
    hello: 381,
    helloColor: "red",
    thankyou: 643,
    thankyouColor: "yellow",
    iloveyou: 884,
    iloveyouColor: "lime"
  }
];


export const mockPieData = [
  {
    id: "ec2",
    label: "ec2",
    value: 84,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "alb",
    label: "alb",
    value: 62,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "ecs",
    label: "ecs",
    value: 84,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "waf",
    label: "waf",
    value: 59,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "ebs",
    label: "ebs",
    value: 98,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "hello",
    color: tokens("dark").redAccent[500],
    data: [
      {
        x: "06/02",
        y: 101,
      },
      {
        x: "06/17",
        y: 75,
      },
      {
        x: "07/02",
        y: 36,
      },
      {
        x: "07/17",
        y: 216,
      },
      {
        x: "08/02",
        y: 35,
      },
      {
        x: "08/17",
        y: 236,
      },
      {
        x: "09/02",
        y: 88,
      },
      {
        x: "09/17",
        y: 232,
      },
      {
        x: "10/02",
        y: 281,
      },
      {
        x: "10/17",
        y: 1,
      },
      {
        x: "11/02",
        y: 35,
      },
      {
        x: "11/17",
        y: 14,
      },
    ],
  },
  {
    id: "yes",
    color: tokens("dark").blueAccent[500],
    data: [
      {
        x: "06/02",
        y: 208,
      },
      {
        x: "06/17",
        y: 104,
      },
      {
        x: "07/02",
        y: 21,
      },
      {
        x: "07/17",
        y: 16,
      },
      {
        x: "08/02",
        y: 100,
      },
      {
        x: "08/17",
        y: 192,
      },
      {
        x: "09/02",
        y: 178,
      },
      {
        x: "09/17",
        y: 22,
      },
      {
        x: "10/02",
        y: 87,
      },
      {
        x: "10/17",
        y: 19,
      },
      {
        x: "11/02",
        y: 141,
      },
      {
        x: "11/17",
        y: 29,
      },
    ],
  },
  {
    id: "i love you",
    color: tokens("dark").limeYellow[500],
    data: [
      {
        x: "06/02",
        y: 82,
      },
      {
        x: "06/17",
        y: 180,
      },
      {
        x: "07/02",
        y: 108,
      },
      {
        x: "07/17",
        y: 210,
      },
      {
        x: "08/02",
        y: 129,
      },
      {
        x: "08/17",
        y: 58,
      },
      {
        x: "09/02",
        y: 49,
      },
      {
        x: "09/17",
        y: 62,
      },
      {
        x: "10/02",
        y: 87,
      },
      {
        x: "10/17",
        y: 91,
      },
      {
        x: "11/02",
        y: 279,
      },
      {
        x: "11/17",
        y: 68,
      },
    ],
  },
  {
    id: "no",
    color: tokens("dark").purple[500],
    data: [
      {
        x: "06/02",
        y: 216,
      },
      {
        x: "06/17",
        y: 298,
      },
      {
        x: "07/02",
        y: 391,
      },
      {
        x: "07/17",
        y: 218,
      },
      {
        x: "08/02",
        y: 136,
      },
      {
        x: "08/17",
        y: 196,
      },
      {
        x: "09/02",
        y: 318,
      },
      {
        x: "09/17",
        y: 357,
      },
      {
        x: "10/02",
        y: 153,
      },
      {
        x: "10/17",
        y: 182,
      },
      {
        x: "11/02",
        y: 190,
      },
      {
        x: "11/17",
        y: 269,
      },
    ],
  },
  {
    id: "thank you",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "06/02",
        y: 28,
      },
      {
        x: "06/17",
        y: 47,
      },
      {
        x: "07/02",
        y: 81,
      },
      {
        x: "07/17",
        y: 18,
      },
      {
        x: "08/02",
        y: 14,
      },
      {
        x: "08/17",
        y: 49,
      },
      {
        x: "09/02",
        y: 23,
      },
      {
        x: "09/17",
        y: 37,
      },
      {
        x: "10/02",
        y: 12,
      },
      {
        x: "10/17",
        y: 82,
      },
      {
        x: "11/02",
        y: 71,
      },
      {
        x: "11/17",
        y: 23,
      },
    ],
  }
];

export const mockGeographyData = [
  {
    id: "IND",
    value: 10783,
  },
  {
    id: "USA",
    value: 2153,
  },
];
