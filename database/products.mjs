// This is a file of all product data just for our purposes. Products are stored as objects. 
// Products are now being served to the API from MongoDB Atlas.

import {Product} from './database.js';
let products =  [{
            _id: "1",
            product_name: "BLACK HOODED JACKET",
            product_desc: "Sweatshirt jacket with a lined drawstring hood. Zip at front, side pockets, and ribbing at cuffs and hem. Soft, brushed inside.",
            product_category: ["jacket","black","trendy","winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429756/1_aftwak.jpg", alt: "" }],
            product_cost: 14.99,
            product_rating: 4.7,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "2",
            product_name: "WOOL BLEND SHACKET",
            product_desc: "Shirt jacket in wool-blend fabric with a lightly brushed finish. Collar, buttons at front, and chest pockets with flap. Dropped shoulders and long, wide sleeves with buttons at cuffs. Rounded hem. Lining in recycled polyester.",
            product_category: ["jacket","trendy", "color","winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429757/2_oumam3.jpg", alt: "" }],
            product_cost: 24.99,
            product_rating: 4.3,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "3",
            product_name: "LONG FIT BLACK TEE",
            product_desc: "Long, crew-neck T-shirt in soft jersey with a rounded hem.",
            product_category: ["tshirt","black","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429759/3_nhmz6u.jpg", alt: "" }],
            product_cost: 9.99,
            product_rating: 4.9,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "4",
            product_name: "OVERSIZED HOODIE",
            product_desc: "Oversized sweatshirt in a cotton blend with a jersey-lined drawstring hood. Heavily dropped shoulders, long sleeves, and ribbing at cuffs and hem. Soft, brushed inside. Polyester content is partly recycled.",
            product_category: ["sweatshirt","color","trendy","winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429759/4_mgydfq.jpg", alt: "" }],
            product_cost: 19.99,
            product_rating: 4.5,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "5",
            product_name: "LACE DETAIL SATIN TOP",
            product_desc: "Sleeveless top in satin with a lace section at upper front. V-neck at front and back.",
            product_category: ["top","black","trendy"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429756/5_z5df6a.jpg", alt: "" }],
            product_cost: 14.99,
            product_rating: 3.9,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "6",
            product_name: "KNIT LAMBSWOOL SWEATER",
            product_desc: "Fine-knit, crew-neck sweater in soft lambswool. Ribbing at neck, cuffs, and hem.",
            product_category: ["sweater","color","trendy", "winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429756/6_whg2sv.jpg", alt: "" }],
            product_cost: 24.99,
            product_rating: 4.6,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "7",
            product_name: "BLACK SKATER SKIRT",
            product_desc: "Short skater skirt in thick jersey with an elasticized waistband. Visible zip at back. Unlined.",
            product_category: ["skirt","black","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429757/7_dhszeo.jpg", alt: "" }],
            product_cost: 14.99,
            product_rating: 4.9,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "8",
            product_name: "LIGHT BLUE ROMPER",
            product_desc: "Romper in soft, washed Tencel™ lyocell denim. V-neck at front with sewn wrapover and concealed snap fastener. Dropped shoulders, short sleeves, and covered, elasticized seam at waist with removable tie belt. Side pockets.",
            product_category: ["romper","color","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429757/8_tsvgx9.jpg", alt: "" }],
            product_cost: 29.99,
            product_rating: 3.7,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "9",
            product_name: "V-NECK BLOUSE",
            product_desc: "Long-sleeved blouse in woven fabric. Collar, V-neck, buttons at front, and buttons at cuffs. Rounded hem.",
            product_category: ["top","blouse","smart","formal","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429757/9_ljwm0w.jpg", alt: "" }],
            product_cost: 17.99,
            product_rating: 4.7,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "10",
            product_name: "SLIM FIT SUIT PANTS",
            product_desc: "Suit pants in woven fabric with concealed zip fly and hook-and-eye fastener. Side pockets, welt back pockets, and legs with creases. Slim Fit – close-fitting at thighs, knees, and ankles for a tailored silhouette.",
            product_category: ["pants","black","formal"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429757/10_f1qbit.jpg", alt: "" }],
            product_cost: 29.99,
            product_rating: 4.6,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "11",
            product_name: "CROPPED JERSEY CAMISOLE TOP",
            product_desc: "Fitted, cropped camisole top in cotton jersey with narrow shoulder straps.",
            product_category: ["crop","sport","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429776/11_ttxpck.jpg", alt: "" }],
            product_cost: 14.99,
            product_rating: 4.1,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "12",
            product_name: "SLIM FIT STRETCH SHIRT",
            product_desc: "Shirt in a stretch premium cotton blend. Narrow turn-down collar, smooth button placket, and shaping seams at back. Long sleeves with adjustable buttoning at cuffs. Rounded hem. Slim fit - narrow shoulders and tapered waist for a tailored silhouette.",
            product_category: ["shirt","black","formal"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429776/12_d5tquy.jpg", alt: "" }],
            product_cost: 29.99,
            product_rating: 4.3,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "13",
            product_name: "BOXY PUFFER JACKET",
            product_desc: "Boxy, padded jacket in woven fabric. Stand-up collar, zipper at front, and side pockets. Concealed elastic at cuffs and elasticized drawstring at hem. Lined.",
            product_category: ["jacket","black","trendy","winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429776/13_hcwo15.jpg", alt: "" }],
            product_cost: 34.99,
            product_rating: 4.9,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "14",
            product_name: "MERINO WOOL SWEATER",
            product_desc: "Fine-knit, turtleneck sweater in soft merino wool with ribbing at cuffs and hem.",
            product_category: ["sweater","color","trendy", "winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429776/14_u15dwb.jpg", alt: "" }],
            product_cost: 24.99,
            product_rating: 4.4,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "15",
            product_name: "CHECKERED COTTON SHIRT",
            product_desc: "Straight-cut shirt in woven cotton fabric. Collar, buttons at front, open chest pocket, and yoke at back with pleat. Long sleeves with button at cuffs. Rounded hem, slightly longer at back.",
            product_category: ["shirt","color"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429776/15_rczfii.jpg", alt: "" }],
            product_cost: 19.99,
            product_rating: 3.9,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "16",
            product_name: "WATER REPELLENT TRACK JACKET",
            product_desc: "Short, boxy jacket in water-repellent, functional fabric. Stand-up collar with concealed zipper and fold-up hood inside. Zipper at front with chin guard, front pockets, and long raglan sleeves. Covered elastic at cuffs and hem. Water-repellent coating without fluorocarbons.",
            product_category: ["jacket","black","trendy","sport"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429776/16_ze62ls.jpg", alt: "" }],
            product_cost: 49.99,
            product_rating: 3.8,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "17",
            product_name: "HIGH WAISTED SKINNY JEANS",
            product_desc: "Jeans in washed superstretch denim with a high waist. Zip fly with button, mock front pockets, and regular back pockets. Super-skinny legs.",
            product_category: ["jeans","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429776/17_fnyy6g.jpg", alt: "" }],
            product_cost: 19.99,
            product_rating: 4.6,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "18",
            product_name: "POPLIN SHORT SHIRT DRESS",
            product_desc: "Short dress in softly draped woven fabric. Collar, V-neck, and concealed buttons at front. Tie belt at waist, long sleeves with button at cuffs, and a rounded hem. Unlined.",
            product_category: ["dress","black","trendy"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429776/18_hp9fxk.jpg", alt: "" }],
            product_cost: 29.99,
            product_rating: 4.2,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "19",
            product_name: "PREMIUM CASHMERE BLEND COAT",
            product_desc: "Coat in a felted wool blend with cashmere content. Chimney collar with concealed snap fasteners and wind flap at front with concealed buttons. Welt side pockets, three inner pockets, and a vent at back. Lining in recycled polyester. Wool content is recycled.",
            product_category: ["coat","smart","formal"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429776/19_gkuoho.jpg", alt: "" }],
            product_cost: 149.99,
            product_rating: 4.5,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "20",
            product_name: "SEAMLESS SPORTS BRALETTE",
            product_desc: "Sports bralette in fast-drying, functional fabric. Wide shoulder straps, lined cups with removable inserts for shaping, and racer back with cut-out detail. Light support. Designed with a minimum number of seams for a more comfortable fit and added freedom of movement. Polyamide content is partly recycled.",
            product_category: ["crop","color","trendy","sport"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429777/20_fymsoy.jpg", alt: "" }],
            product_cost: 14.99,
            product_rating: 4.8,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "21",
            product_name: "SIMPLE TEE",
            product_desc: "Crew-neck T-shirt in premium cotton jersey.",
            product_category: ["tshirt","black"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429777/21_ggjtxx.jpg", alt: "" }],
            product_cost: 9.99,
            product_rating: 4.9,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "22",
            product_name: "V-NECK BLOUSE",
            product_desc: "Long-sleeved blouse in woven fabric. Collar, V-neck, buttons at front, and buttons at cuffs. Rounded hem.",
            product_category: ["top","blouse","color","formal","smart"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429777/22_eqn5my.jpg", alt: "" }],
            product_cost: 14.99,
            product_rating: 4.4,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "23",
            product_name: "ANKLE LENGTH SLACKS",
            product_desc: "Slacks in woven stretch fabric. Regular waist, elastication at back of waistband, and mock welt pocket at back. Slim, ankle-length legs with creases.",
            product_category: ["pants","black","formal","smart"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429777/23_hjnwlg.jpg", alt: "" }],
            product_cost: 14.99,
            product_rating: 4.3,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "24",
            product_name: "CLASSIC TURTLENECK SWEATER",
            product_desc: "Turtleneck sweater in fine-knit cotton. Long sleeves and ribbing at cuffs and hem.",
            product_category: ["sweater","trendy","winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429777/24_vqdokj.jpg", alt: "" }],
            product_cost: 19.99,
            product_rating: 4.6,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "25",
            product_name: "BLACK HOODIE DRESS",
            product_desc: "Short, straight-cut dress in sweatshirt fabric. Lined hood and kangaroo pocket. Dropped shoulders, long sleeves, and ribbing at cuffs and hem. Soft, brushed inside.",
            product_category: ["sweater","dress","trendy","black"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429777/25_wpueju.jpg", alt: "" }],
            product_cost: 24.99,
            product_rating: 4.2,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "26",
            product_name: "PUFF SLEEVES DRESS",
            product_desc: "Short A-line dress in woven cotton fabric. Square neckline front and back, short puff sleeves with elastic at shoulders and cuffs, and gathered tiers on skirt. Unlined.",
            product_category: ["dress","color","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429777/26_yo5brl.jpg", alt: "" }],
            product_cost: 24.99,
            product_rating: 3.6,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "27",
            product_name: "CORAL SLIM BODYSUIT",
            product_desc: "Sleeveless bodysuit in ribbed jersey with a slight sheen. Wide shoulder straps, low-cut neckline front and back, and decorative buttons at front. Concealed snap fasteners at gusset.",
            product_category: ["top","bodysuit","color","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429777/27_htd76r.jpg", alt: "" }],
            product_cost: 34.99,
            product_rating: 4.5,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "28",
            product_name: "COLD SHOULDER FLORAL DRESS",
            product_desc: "Short, A-line dress in crinkled chiffon. Band collar, covered buttons at top, could shoulder cut, and narrow cuffs with a covered button. Seam at waist and tiered skirt. V-neck liner dress in jersey made from recycled polyester with narrow shoulder straps.",
            product_category: ["dress","color","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/28_s7dorp.jpg", alt: "" }],
            product_cost: 24.99,
            product_rating: 4.7,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "29",
            product_name: "SKINNY FIT SUIT PANTS",
            product_desc: "Suit pants in woven fabric. Zip fly with concealed hook-and-eye fastener. Diagonal side pockets, a welt back pocket, and legs with creases. Skinny Fit – slightly shorter legs with close-fitting thighs, knees, and ankles for a fully tailored silhouette.",
            product_category: ["pants","formal","smart"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/29_oggmyp.jpg", alt: "" }],
            product_cost: 29.99,
            product_rating: 4.3,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "30",
            product_name: "TRACK JACKET",
            product_desc: "Mesh-lined hood with elasticized drawstring and plastic cord stopper. Zipper at front, chest pocket with concealed zipper, and discreet side pockets. Ribbing at cuffs, narrow elastic at back of hem, and slightly longer and rounded hem at back.",
            product_category: ["jacket","color","trendy","sport"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/30_lfhthy.jpg", alt: "" }],
            product_cost: 69.99,
            product_rating: 4.0,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "31",
            product_name: "FITTED BLAZER",
            product_desc: "Fitted blazer in woven fabric with notched lapels, welt front pockets, and decorative buttons at cuffs. Vent at back. Lined.",
            product_category: ["blazer","black","formal","smart"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/31_qcxs71.jpg", alt: "" }],
            product_cost: 39.99,
            product_rating: 4.2,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "32",
            product_name: "FAUX SHEARLING-LINED JACKET",
            product_desc: "Jacket in faux suede with faux leather details. Collar with tabs and metal buckles, zip at front, and front pockets with zip. Faux shearling lining.",
            product_category: ["jacket","black","trendy","winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/32_hicluk.jpg", alt: "" }],
            product_cost: 79.99,
            product_rating: 4.5,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "33",
            product_name: "JERSEY ROMPER",
            product_desc: "Sleeveless romper in jersey. Box-neck, buttons at top, and narrow, adjustable shoulder straps. Concealed, elasticized seam at waist. Unlined.",
            product_category: ["romper","color","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/33_vmld8t.jpg", alt: "" }],
            product_cost: 39.99,
            product_rating: 4.2,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "34",
            product_name: "CHECKERED COTTON SHIRT",
            product_desc: "Straight-cut shirt in woven cotton fabric. Collar, buttons at front, open chest pocket, and yoke at back with pleat. Long sleeves with button at cuffs. Rounded hem, slightly longer at back.",
            product_category: ["shirt","color","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/34_gscx2d.jpg", alt: "" }],
            product_cost: 19.99,
            product_rating: 4.0,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "35",
            product_name: "FLORAL PATTERNED BLOUSE",
            product_desc: "Blouse in woven, textured fabric with covered buttons at back of neck. Long, voluminous puff sleeves tapered at cuffs.",
            product_category: ["top","blouse","trendy","summer","color","smart"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/35_slvnr4.jpg", alt: "" }],
            product_cost: 24.99,
            product_rating: 3.7,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "36",
            product_name: "DENIM OVERALLS",
            product_desc: "Overalls in washed denim. Wide suspenders with metal fasteners. Bib pocket, front and back pockets, smaller pockets on one leg, and a loop on other leg. Seam at waist with buttons at sides, mock fly, and straight, wide legs. Content is partly recycled.",
            product_category: ["jumpsuit","black","trendy","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/36_yjcrs5.jpg", alt: "" }],
            product_cost: 39.99,
            product_rating: 4.6,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "37",
            product_name: "SLIM FIT LINEN-BLEND BLAZER",
            product_desc: "Single-breasted blazer in woven fabric made from a linen and cotton blend. Narrow, notched lapels with decorative buttonhole, two buttons at front, and decorative buttons at cuffs. Welt chest pocket, front pockets with flap, and three inner pockets, one with button. Vent at back. Lined. Slim Fit – tapered at chest and waist with slightly narrower sleeves for a tailored silhouette.",
            product_category: ["blazer","color","formal","smart"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429778/37_mlmrla.jpg", alt: "" }],
            product_cost: 74.99,
            product_rating: 4.7,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "38",
            product_name: "MESH SHIRT",
            product_desc: "Fitted shirt in airy mesh with a collar, buttons down the front and long sleeves with buttoned cuffs.",
            product_category: ["shirt","top","blouse","black"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429779/38_rjx7fm.jpg", alt: "" }],
            product_cost: 19.99,
            product_rating: 3.9,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "39",
            product_name: "RIB KNIT CARDIGAN",
            product_desc: "Boxy, long-sleeved cardigan in soft, rib-knit fabric with wool content. V-neck, buttons at front, and dropped shoulders. Ribbing at cuffs and hem. Polyester content is recycled.",
            product_category: ["sweater","color","trendy","winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429779/39_fe4guo.jpg", alt: "" }],
            product_cost: 34.99,
            product_rating: 4.8,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "40",
            product_name: "SKINNY FIT BLAZER",
            product_desc: "Single-breasted blazer in woven stretch fabric with narrow, notched lapels. Chest pocket, front pockets with flap, and an inner pocket. Decorative buttons at cuffs and a vent at back. Lined. Skinny Fit – slightly shorter style, shaped at chest, tapered sharply at waist, combined with narrow shoulders and sleeves for a completely tailored silhouette.",
            product_category: ["blazer","black","formal","smart"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429779/40_tesktd.jpg", alt: "" }],
            product_cost: 69.99,
            product_rating: 4.7,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "41",
            product_name: "SLIM FIT SUIT VEST",
            product_desc: "Suit vest in woven fabric with shiny woven fabric at back. Buttons at front, a chest pocket, welt front pockets, and adjustable tab at back. Lined.",
            product_category: ["vest","color","formal","smart"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429779/41_zoo1yo.jpg", alt: "" }],
            product_cost: 24.99,
            product_rating: 4.4,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "42",
            product_name: "CYCLING SHORTS",
            product_desc: "Cycling shorts in stretch cotton jersey with a high waist and elasticized waistband.",
            product_category: ["shorts","black","sport","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429779/42_n52e3e.jpg", alt: "" }],
            product_cost: 5.99,
            product_rating: 4.9,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "43",
            product_name: "PRINTED SWEATSHIRT",
            product_desc: "Straight-style top in sweatshirt fabric with a print motif at the top. Relaxed fit with low dropped shoulders, long, wide sleeves and ribbing around the neckline and cuffs. Soft brushed inside.",
            product_category: ["sweatshirt","color","trendy","winter"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429780/43_ejjayj.jpg", alt: "" }],
            product_cost: 24.99,
            product_rating: 4.1,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "44",
            product_name: "COTTON POLO SHIRT",
            product_desc: "Polo shirt in cotton piqué. Ribbed collar, button placket, and short sleeves with ribbed cuffs. Slits at sides.",
            product_category: ["tshirt","color","smart","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429780/44_jsg0de.jpg", alt: "" }],
            product_cost: 14.99,
            product_rating: 4.3,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },{
            _id: "45",
            product_name: "HIGH WAISTED DENIM SHORTS",
            product_desc: "Short, 5-pocket shorts in washed denim with heavily distressed details. High waist and button fly. Sewn foldover cuffs with raw-edge, cut-off hems.",
            product_category: ["shorts","denim","color","summer"],
            product_images: [{url: "https://res.cloudinary.com/dl6m7txan/image/upload/v1602429780/45_vk1xoj.jpg", alt: "" }],
            product_cost: 9.99,
            product_rating: 4.5,
            product_num_of_reviews: 0,
            product_num_of_wishlist: 0,
        },
    ];
for(let product of products){
    (new Product({...product}).save().then((p)=>console.log(p,'saved')).catch((e)=>console.log("error",e)));
}