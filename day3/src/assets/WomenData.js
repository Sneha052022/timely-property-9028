export const womenData = {
    women_products: {
        filters: [
            {
                title: "Category",
                id: "f1",
                status: false,
                options: [
                    {
                        id: "c1",
                        value: "Jewellery",
                        status: false,
                        key: "JEWELRY",
                    },
                    {
                        id: "c2",
                        value: "Jackets",
                        status: false,
                        key: "JACKETS",
                    },
                    {
                        id: "c3",
                        value: "Pajamas",
                        status: false,
                        key: "PAJAMAS",
                    },
                    {
                        id: "c4",
                        value: "Shoes",
                        status: false,
                        key: "SHOES",
                    },
                ],
            },
            {
                title: "Size",
                id: "f2",
                status: false,
                options: [
                    {
                        id: "s1",
                        value: "Small",
                        status: false,
                        key: "s",
                    },
                    {
                        id: "s2",
                        value: "Medium",
                        status: false,
                        key: "m",
                    },
                    {
                        id: "s3",
                        value: "Large",
                        status: false,
                        key: "L",
                    },
                    {
                        id: "s4",
                        value: "X-Large",
                        status: false,
                        key: "xL",
                    },
                ],
            },
            {
                title: "Color",
                id: "f3",
                status: false,
                options: [
                    {
                        id: "cl1",
                        value: "Blue",
                        status: false,
                        key: "blue",
                    },
                    {
                        id: "cl2",
                        value: "Black",
                        status: false,
                        key: "black",
                    },
                    {
                        id: "cl3",
                        value: "Green",
                        status: false,
                        key: "green",
                    },
                    {
                        id: "cl4",
                        value: "Yellow",
                        status: false,
                        key: "yellow",
                    },
                    {
                        id: "cl5",
                        value: "White",
                        status: false,
                        key: "white",
                    },
                ],
            },
            {
                title: "Trending",
                id: "f4",
                status: false,
                options: [
                    {
                        id: "t1",
                        value: "Best Seller",
                        key: "best_seller",
                        status: false,
                    },
                    {
                        id: "t2",
                        value: "Top Rated",
                        key: "top_rated",
                        status: false,
                    },
                ],
            },
        ],
        data: [
            {
                id: 1,
                category: "JEWELRY",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 4391,
                title: "Metal-and-raffia disc earrings",
                variant: [
                    {
                        id: 11,
                        color: "Brown",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BI323_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 111,
                                img: "https://www.jcrew.com/s7-img-facade/BI323_BK0001_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 112,
                                img: "https://www.jcrew.com/s7-img-facade/BI323_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Raffia accessories are having a moment, and this is our latest take... These statement earrings are the perfect finishing touch (and they're superlightweight and wearable too).",
            },
            {
                id: 2,
                quantity: 10,
                category: "JEWELRY",
                sizes: [
                    {
                        id: "s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 8899,
                title: " Rectangle cotton raffia-wrapped earrings",
                variant: [
                    {
                        id: 21,
                        color: "Blue",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BG668_PK5352?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 211,
                                img: "https://www.jcrew.com/s7-img-facade/BG668_PK5352?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 212,
                                img: "https://www.jcrew.com/s7-img-facade/BG668_PK5352?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Update your video-chat half with these statement-making, cotton raffia-wrapped acetate earrings. Feel-good fact: This jewelry was made using recycled zinc casting. Want to keep your jewelry looking like new? We recommend removing it before showering or exercise, and putting it on after applying hair products or perfume. To clean your pieces, polish them with a soft, dry cloth—and when not wearing, store them in a pouch or jewelry case.",
            },
            {
                id: 3,
                quantity: 10,
                category: "JEWELRY",
                sizes: [
                    {
                        id: "s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 5644,
                title: "Made-in-Italy acetate rectangle",
                variant: [
                    {
                        id: 31,
                        color: "white",
                        status: false,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BB543_GR7637_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 311,
                                img: "https://www.jcrew.com/s7-img-facade/BB543_GR7637_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 312,
                                img: "https://www.jcrew.com/s7-img-facade/BB543_GR7637_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 313,
                                img: "https://www.jcrew.com/s7-img-facade/BB543_GR7637?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                    {
                        id: 32,
                        color: "yellow",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BB543_OR5183?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 321,
                                img: "https://www.jcrew.com/s7-img-facade/BB543_OR5183?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                    {
                        id: 33,
                        color: "red",
                        status: false,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BB543_PK5833?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 331,
                                img: "https://www.jcrew.com/s7-img-facade/BB543_PK5833?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Handcrafted in Italy (with lots of amore!), these acetate rectangle earrings come in two go-with-everything hues. Hint: Pull your hair back to really show them off. Want to keep your jewelry looking like new? We recommend removing it before showering or exercise, and putting it on after applying hair products or perfume. To clean your pieces, polish them with a soft, dry cloth—and when not wearing, store them in a pouch or jewelry case.",
            },
            {
                id: 4,
                category: "JEWELRY",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "top_rated",
                brand: "canvas",
                price: 1526,
                title: "Made-in-Italy acetate rounded earrings",
                variant: [
                    {
                        id: 41,
                        color: "Blue",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BG691_BR6053?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 411,
                                img: "https://www.jcrew.com/s7-img-facade/BG691_BR6053?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 412,
                                img: "https://www.jcrew.com/s7-img-facade/BG691_BR6053?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Handcrafted in Italy (with lots of amore!), these rounded acetate earrings come in a unique and eye-catching array of colors. Hint: Pull your hair back to really show them off. Want to keep your jewelry looking like new? We recommend removing it before showering or exercise, and putting it on after applying hair products or perfume. To clean your pieces, polish them with a soft, dry cloth—and when not wearing, store them in a pouch or jewelry case.",
            },
            {
                id: 5,
                category: "JACKETS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "top_rated",
                brand: "canvas",
                price: 15200,
                title: "Relaxed perfect lightweight jacket",
                variant: [
                    {
                        id: 51,
                        color: "Light Blue",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BF450_GY5218_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 511,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_GY5218_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 512,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_GY5218_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=5400",
                            },
                        ],
                    },
                ],
                desc: "How did we make the perfect lightweight jacket even more perfect? We updated the silhouette with a little more room so it's more relaxed and easy to wear. Plus, it still has the details you love. See: our famous water-resistant fabric, a fishtail hem for extra coverage (and splash protection), a flattering elastic bungee at the waist and a cute (and practical) hood, so you'll be looking forward to every rainy day.",
            },
            {
                id: 6,
                category: "JACKETS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "top_rated",
                brand: "canvas",
                price: 15091,
                title: "Classic denim jacket in Brilliant Day wash",
                variant: [
                    {
                        id: 61,
                        color: "Blue",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/AI670_DM3335_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 611,
                                img: "https://www.jcrew.com/s7-img-facade/AI670_DM3335_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 612,
                                img: "https://www.jcrew.com/s7-img-facade/AI670_DM3335_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 613,
                                img: "https://www.jcrew.com/s7-img-facade/AI670_DM3335_d6?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 614,
                                img: "https://www.jcrew.com/s7-img-facade/AI670_DM3335?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "A wear-with-everything layer, this classic denim jacket has a new faded wash and silver hardware for a look that just gets better with time.",
            },
            {
                id: 7,
                category: "JACKETS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "top_rated",
                brand: "canvas",
                price: 15201,
                title: "Relaxed perfect lightweight jacket",
                variant: [
                    {
                        id: 71,
                        color: "brown",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BF450_BR6152_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 711,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_BR6152_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 712,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_BR6152_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 713,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_BR6152?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 714,
                                img: "https://www.jcrew.com/s7-img-facade/BH827_NA5944?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                    {
                        id: 72,
                        color: "white",
                        status: false,
                        quantity: 10,
                        thumb: "hhttps://www.jcrew.com/s7-img-facade/BF450_GY5218?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 721,
                                img: "hhttps://www.jcrew.com/s7-img-facade/BF450_GY5218?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 722,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_GY5218_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "How did we make the perfect lightweight jacket even more perfect? We updated the silhouette with a little more room so it's more relaxed and easy to wear. Plus, it still has the details you love. See: our famous water-resistant fabric, a fishtail hem for extra coverage (and splash protection), a flattering elastic bungee at the waist and a cute (and practical) hood, so you'll be looking forward to every rainy day.",
            },
            {
                id: 8,
                category: "JACKETS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 4646,
                title: "Relaxed perfect lightweight jacket",
                variant: [
                    {
                        id: 81,
                        color: "Blue",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BF450_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 811,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_BK0001_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 812,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_BK0001_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 813,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 814,
                                img: "https://www.jcrew.com/s7-img-facade/BF450_BK0001_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "How did we make the perfect lightweight jacket even more perfect? We updated the silhouette with a little more room so it's more relaxed and easy to wear. Plus, it still has the details you love. See: our famous water-resistant fabric, a fishtail hem for extra coverage (and splash protection), a flattering elastic bungee at the waist and a cute (and practical) hood, so you'll be looking forward to every rainy day.",
            },
            {
                id: 9,
                category: "PAJAMAS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 6331,
                title: "Cotton poplin short-sleeve pajama set in bouquet block print",
                variant: [
                    {
                        id: 91,
                        color: "Yellow",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BH647_PT1314_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 911,
                                img: "https://www.jcrew.com/s7-img-facade/BH647_PT1314_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 912,
                                img: "https://www.jcrew.com/s7-img-facade/BH647_PT1314_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 913,
                                img: "https://www.jcrew.com/s7-img-facade/BH647_PT1314?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Sleepwear news flash: We made our classic short-sleeve pj set in customer-favorite cotton poplin for a great night's sleep, or a lazy summer day of lounging around (no judgment here). Plus, it was crafted at a Fair Trade Certified™ factory that provides additional income and better conditions for the people who work there. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.a cold lemonade on the back porch.",
            },
            {
                id: 10,
                category: "PAJAMAS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 6331,
                title: "Cotton-linen short-sleeve pajama set",
                variant: [
                    {
                        id: 1001,
                        color: "White",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/AY362_OR5678_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1011,
                                img: "https://www.jcrew.com/s7-img-facade/AY362_OR5678_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1012,
                                img: "https://www.jcrew.com/s7-img-facade/AY362_OR5678_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            ,
                            {
                                id: 1013,
                                img: "https://www.jcrew.com/s7-img-facade/AY362_OR5678?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=5400",
                            },
                        ],
                    },
                ],
                desc: "Sleepwear news flash: We made our classic short-sleeve pj set in airy cotton-linen for a great night's sleep, or a lazy summer day of lounging around (no judgment here). Bonus points for the sweet block print-inspired floral. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
            },
            {
                id: 11,
                category: "PAJAMAS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "top_rated",
                brand: "canvas",
                price: 6617,
                title: "Easy-luxe eco long-sleeve pajama se",
                variant: [
                    {
                        id: 1101,
                        color: "golden",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BD193_BL6691_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1111,
                                img: "https://www.jcrew.com/s7-img-facade/BD193_BL6691_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1112,
                                img: "https://www.jcrew.com/s7-img-facade/BD193_BL6691?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Introducing easy-luxe eco, our new sleep fabric that's decidedly drapey, a little bit slinky and just an all-around good hang. The best part? You'll sleep even better knowing that it has a positive impact on the planet, since this silky fabric was crafted with care from 50 percent recycled materials like plastic bottles and old fabric scraps.",
            },
            {
                id: 12,
                category: "PAJAMAS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 7573,
                title: "End-on-end cotton short-sleeve pajama set",
                variant: [
                    {
                        id: 1201,
                        color: "Green",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BA015_PK5748_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1211,
                                img: "https://www.jcrew.com/s7-img-facade/BA015_PK5748_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1212,
                                img: "https://www.jcrew.com/s7-img-facade/BA015_PK5748?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1213,
                                img: "https://www.jcrew.com/s7-img-facade/BA015_PK5748_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Something about a matching pj set always makes us sleep better. We updated our classic menswear-inspired silhouette with a slightly higher rise and a more relaxed fit so you can rest even easier. By buying cotton products from J.Crew, you're supporting more responsibly grown cotton through the Better Cotton Initiative.",
            },
            {
                id: 13,
                category: "SHOES",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 7500,
                title: "Sorrento thong sandals in leather",
                variant: [
                    {
                        id: 1301,
                        color: "Red",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BE799_BR6203?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1311,
                                img: "https://www.jcrew.com/s7-img-facade/BE799_BR6203?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1312,
                                img: "https://www.jcrew.com/s7-img-facade/BE799_BR6203_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1313,
                                img: "https://www.jcrew.com/s7-img-facade/BE799_BR6203_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1314,
                                img: "https://www.jcrew.com/s7-img-facade/BE799_BR6203_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Say, Ciao! to our Sorrento collection—a brand-new, more comfortable update to our customer-favorite Capri sandals. With a cushier footbed and soft leather straps, these classic sandals can go from poolside with a book to a seaside dinner with your favorite maxi dress.",
            },
            {
                id: 14,
                category: "SHOES",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "top_rated",
                brand: "canvas",
                price: 15500,
                title: "Canvas espadrille flats",
                variant: [
                    {
                        id: 1401,
                        color: "Black",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BH420_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1411,
                                img: "https://www.jcrew.com/s7-img-facade/BH420_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1412,
                                img: "https://www.jcrew.com/s7-img-facade/BH420_BK0001_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "The espadrille has been around since (at least) the 14th century, which gives this style some serious staying power... A few more pluses: the soft canvas upper and the walkable rubber sole.",
            },
            {
                id: 15,
                category: "SHOES",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 16800,
                title: "Lucie double-strap block-heel",
                variant: [
                    {
                        id: 1501,
                        color: "Multi",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BH396_BR6712_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1511,
                                img: "https://www.jcrew.com/s7-img-facade/BH396_BR6712_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1512,
                                img: "https://www.jcrew.com/s7-img-facade/BH396_BR6712_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1513,
                                img: "https://www.jcrew.com/s7-img-facade/BH396_BR6712?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Introducing our new, oh-so-occasion-ready sandals. With double leather straps and a just-right heel height, they're ideal for wedding dance floors and date nights alike. We love how they look dressed down with your favorite straight-leg denim too.",
            },
            {
                id: 16,
                category: "SHOES",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 3119,
                title: "J.Crew trainers in colorblock",
                variant: [
                    {
                        id: 1601,
                        color: "Yellow",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BA972_EE2793_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1611,
                                img: "https://www.jcrew.com/s7-img-facade/BA972_EE2793_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1612,
                                img: "https://www.jcrew.com/s7-img-facade/BA972_EE2793_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1613,
                                img: "https://www.jcrew.com/s7-img-facade/BA972_EE2793?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Introducing the J.Crew trainer, our newest, most eco-friendly (and comfortable!) sneaker yet. The upper is made with 100 percent recycled nylon, and the mesh lining is made from 51 percent recycled polyester—both of which might include materials like fishing nets, fabric scraps and old clothes. The laces are made with responsibly sourced cotton through the Better Cotton Initiative. With retro-inspired design details, suede trim and a footbed with a cushy gel insert for added comfort, they're ideal for easy-going outdoor adventures and city streets alike.",
            },
            {
                id: 17,
                category: "SWEATSHIRTS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "best_seller",
                brand: "canvas",
                price: 5028,
                title: "Magic Rinse™ crewneck sweatshirt",
                variant: [
                    {
                        id: 1701,
                        color: "Blue",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/AY080_PR6127_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1711,
                                img: "https://www.jcrew.com/s7-img-facade/AY080_PR6127_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1712,
                                img: "https://www.jcrew.com/s7-img-facade/AY080_PR6127_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1713,
                                img: "https://www.jcrew.com/s7-img-facade/AY080_PR6127?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1714,
                                img: "https://www.jcrew.com/s7-img-facade/AY080_PR6127?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "We've got a new trick up our sleeve(s). Meet Magic Rinse, a special four-step process that makes our sweats fabric so soft, you'll just have to feel it to believe it. Yup, that soft...and drapey...and lightweight—like we said, magic. Plus, we crafted this classic crewneck sweatshirt in lots of marbled, vintage-y shades that are made to be mixed-and-matched with our Magic Rinse bottoms. And that's not all that's magic about it: ",
            },
            {
                id: 18,
                category: "SWEATSHIRTS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "top_rated",
                brand: "canvas",
                price: 7573,
                title: "Magic Rinse™ half-zip sweatshirt",
                variant: [
                    {
                        id: 1801,
                        color: "White",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BF360_BL8133_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1811,
                                img: "https://www.jcrew.com/s7-img-facade/BF360_BL8133_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1812,
                                img: "https://www.jcrew.com/s7-img-facade/BF360_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "We've got a new trick up our sleeve(s)... Meet Magic Rinse, a special four-step process that makes our sweats fabric so soft, you'll just have to feel it to believe it. Yup, that soft...and drapey...and lightweight—like we said, magic. This quarter zip has the makings of an instant classic,",
            },
            {
                id: 19,
                category: "SWEATSHIRTS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "top_rated",
                brand: "canvas",
                price: 7573,
                title: "Magic Rinse™ half-zip sweatshirt",
                variant: [
                    {
                        id: 1901,
                        color: "Blue",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BF360_OR5787_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 1911,
                                img: "https://www.jcrew.com/s7-img-facade/BF360_OR5787_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1912,
                                img: "https://www.jcrew.com/s7-img-facade/BF360_OR5787_d2?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 1913,
                                img: "https://www.jcrew.com/s7-img-facade/BF360_OR5787?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "We've got a new trick up our sleeve(s)... Meet Magic Rinse, a special four-step process that makes our sweats fabric so soft, you'll just have to feel it to believe it. Yup, that soft...and drapey...and lightweight—like we said, magic. This quarter zip has the makings of an instant classic, with a timeless folded collar and that not-too-big-not-too-small fit. And that's not all that's magic about it:",
            },
            {
                id: 20,
                category: "SWEATSHIRTS",
                quantity: 10,
                sizes: [
                    {
                        id: "1s1",
                        size: "s",
                        value: "Small",
                    },
                    {
                        id: "1s2",
                        size: "m",
                        value: "Medium",
                    },
                    {
                        id: "1s3",
                        size: "l",
                        value: "Large",
                    },
                    {
                        id: "1s4",
                        size: "xl",
                        value: "X-Large",
                    },
                ],
                Trending: "top_rated",
                brand: "canvas",
                price: 4391,
                title: "Girls' printed short pajama set",
                variant: [
                    {
                        id: 2001,
                        color: "Yellow",
                        status: true,
                        quantity: 10,
                        thumb: "https://www.jcrew.com/s7-img-facade/BF360_OR5787?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                        images: [
                            {
                                id: 2011,
                                img: "https://www.jcrew.com/s7-img-facade/BF360_OR5787?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                            {
                                id: 2012,
                                img: "https://www.jcrew.com/s7-img-facade/BF360_OR5787?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540",
                            },
                        ],
                    },
                ],
                desc: "Pj's. Jammies. Jam-jams. Sleepy suits. No matter what you call them, our supersoft and cozy pajamas feel like a dream.",
            },
        ],
    },
};
