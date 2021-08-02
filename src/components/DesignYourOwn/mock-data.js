import bag1 from '../../assets/img/bags/image_14.png';
import bag2 from '../../assets/img/bags/image_2.png';
import bag4 from '../../assets/img/bags/image_4.png';
import bag5 from '../../assets/img/bags/image_5.png';
import bag6 from '../../assets/img/bags/image_6.png';
import bag7 from '../../assets/img/bags/image_7.png';
import bag8 from '../../assets/img/bags/image_8.png';

import setting1 from '../../assets/img/texture/setting_1.png';
import setting2 from '../../assets/img/texture/setting_2.png';
import setting3 from '../../assets/img/texture/setting_3.png';
import setting4 from '../../assets/img/texture/setting_4.png';
import setting5 from '../../assets/img/texture/setting_5.png';
import setting6 from '../../assets/img/texture/setting_6.png';
import setting7 from '../../assets/img/texture/setting_7.png';
import setting8 from '../../assets/img/texture/setting_8.png';


export const listBag = [
    {
        id: '1',
        img: bag1,
        title: 'Convertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag1, bag8, bag6],
        reviews: [
        ],
        settings_2 : [
          {
            name: "flap",
            isTick: true
          },
          {
            name: "body",
            isTick: true
          },
          {
            name: "strap",
            isTick: false
          },
          {
            name: "hardware",
            isTick: false
          },
          {
            name: "handle",
            isTick: false
          },
        ],
        settings: {
            flap: [
                {
                    title: 'Select Leather Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                        { name: 'COMPASSION', img: setting7 },
                        { name: 'LUXURY', img: setting8 },
                    ],
                },
                {
                    title: 'Select Leather Color',
                    des: '',
                    isColor: true,
                    texture: [
                        { name: 'MERINAL', color: '#9D4D34' },
                        { name: 'MERINAL', color: '#907455' },
                        { name: 'MERINAL', color: '#9BB4C0' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#594D2F' },
                        { name: 'MERINAL', color: '#AF854B' },
                        { name: 'MERINAL', color: '#792614' },
                        { name: 'MERINAL', color: '#2E0506' },
                        { name: 'MERINAL', color: '#752210' },
                        { name: 'MERINAL', color: '#383010' },
                        { name: 'MERINAL', color: '#DA6666' },
                        { name: 'MERINAL', color: '#000000' },
                    ],
                },
                {
                    title: 'Select Pattern Type',
                    des: 'HUMBLE $30',
                    texture: [
                        { name: 'TUMBLED', img: setting1 },
                        { name: 'HELLO', img: setting2 },
                        { name: 'NAME', img: setting3 },
                        { name: 'I’M PHUOC', img: setting4 },
                        { name: 'FANTASTIC', img: setting5 },
                        { name: 'STAGNATE', img: setting6 },
                    ],
                },
            ]
        },
    },
    {
        id: '2',
        img: bag4,
        title: 'Letraset sheets containing Lorem Ipsum passages',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag6, bag8, bag2],
        reviews: [],
    },
    {
        id: '3',
        img: bag5,
        title: 'Convertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '4',
        img: bag1,
        title: 'Convertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '5',
        img: bag4,
        title: 'Letraset sheets containing Lorem Ipsum passages',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '6',
        img: bag2,
        title: 'Coonvertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '7',
        img: bag8,
        title: 'Convertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '8',
        img: bag5,
        title: 'Convertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '9',
        img: bag4,
        title: 'Letraset sheets containing Lorem Ipsum passages',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '10',
        img: bag2,
        title: 'Hampden-Sydney College',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '11',
        img: bag5,
        title: 'Convertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '12',
        img: bag2,
        title: 'Convertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '13',
        img: bag7,
        title: 'Convertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
    {
        id: '14',
        img: bag8,
        title: 'Convertible Mini Merinal',
        cost: '$50.00',
        originalCost: '$50.00',
        details: {
            des:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            measurements: 'Model is 178cm/ 5\'10" and is wearing a US 2',
            composition: '92% POLYESTER 8% POLYURETHANE',
            washing_instructions: 'Dry clean only',
            made_in: 'Italy',
        },
        img_reviews: [bag2, bag8, bag2],
        reviews: [],
    },
];
