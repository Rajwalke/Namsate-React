import React from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


// AppLayout 
// Header
//      -logo
//      -nabvar
//          -home
//          -about
//          -cart 
// body
//  -restro container
//      -restrocard
//          -image
//          -Name of restro,image of dish
//          -star rating
//          -restro info
//          -delivary time
//          
// footer
//  -contact,address,copyright,scoail media

const restroApi=[
        {
          "info": {
            "id": "257428",
            "name": "Raajbagh Restaurant ",
            "cloudinaryImageId": "xvyrclhxftulsglktaek",
            "locality": "Seoni Road",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Indian",
              "Chinese",
              "Fast Food",
              "Beverages"
            ],
            "avgRating": 3.7,
            "veg": true,
            "parentId": "164019",
            "avgRatingString": "3.7",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 59,
              "lastMileTravel": 10.8,
              "serviceability": "SERVICEABLE",
              "slaString": "55-60 mins",
              "lastMileTravelString": "10.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/raajbagh-restaurant-seoni-road-chhindwara-locality-chhindwara-257428",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "234875",
            "name": "Adil Hotel",
            "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
            "locality": "Rautha Wada",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Tandoor"
            ],
            "avgRating": 4.4,
            "parentId": "27123",
            "avgRatingString": "4.4",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 44,
              "lastMileTravel": 12.6,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "12.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹349",
              "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/adil-hotel-rautha-wada-chhindwara-locality-chhindwara-234875",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "151649",
            "name": "Hotel Sai Nath & Sai Restaurant",
            "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
            "locality": "railway station",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Chinese",
              "Beverages",
              "Fast Food",
              "Desserts"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "101802",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 46,
              "lastMileTravel": 10,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "10.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "FREE ITEM"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-chhindwara-151649",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "151648",
            "name": "Mr. Gurung Momo & Chinese Corner",
            "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
            "locality": "Teacher's Colony",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Momos",
              "Chinese",
              "Fast Food"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "140255",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
              "deliveryTime": 42,
              "lastMileTravel": 11.8,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "11.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-chhindwara-151648",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "658210",
            "name": "The Fusion Lounge",
            "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            "locality": "Triloki nagar",
            "areaName": "Railway Station",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Chinese",
              "Beverages",
              "Fast Food",
              "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "395453",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 9.9,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "9.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-fusion-lounge-triloki-nagar-railway-station-chhindwara-658210",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "531441",
            "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
            "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
            "locality": "Satkar Square",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Ice Cream Cakes",
              "Desserts",
              "Ice Cream",
              "Bakery"
            ],
            "avgRating": 5,
            "veg": true,
            "parentId": "21932",
            "avgRatingString": "5.0",
            "totalRatingsString": "3",
            "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 11.2,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "11.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 23:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/gourmet-ice-cream-cakes-by-baskin-robbins-satkar-square-mohan-nagar-chhindwara-531441",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "151518",
            "name": "Bakery World",
            "cloudinaryImageId": "mt2aggiscfl3yviatwng",
            "locality": "Parasia Road",
            "areaName": "Parasia Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Bakery",
              "Ice Cream",
              "Snacks",
              "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "40363",
            "avgRatingString": "4.4",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 12.3,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "12.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/bakery-world-parasia-road-chhindwara-151518",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "150591",
            "name": "Satkar Restaurant",
            "cloudinaryImageId": "rvxp5xbniat84r6efku2",
            "locality": "Sinchai Colony",
            "areaName": "Satkar Chowk",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Indian",
              "Salads",
              "Desserts"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "21553",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 44,
              "lastMileTravel": 12.2,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "12.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 22:45:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/satkar-restaurant-sinchai-colony-satkar-chowk-chhindwara-150591",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "496348",
            "name": "Pizza Box",
            "cloudinaryImageId": "n7wbtvlifwbw5y4a7rrv",
            "locality": "Sanchar Colony",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Pizzas",
              "Burgers",
              "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "3045",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 51,
              "lastMileTravel": 11.5,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "11.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 22:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-box-sanchar-colony-chhindwara-locality-chhindwara-496348",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "150597",
            "name": "Scoops Fast Food And Ice Cream",
            "cloudinaryImageId": "fm3rs3g6z7ibfhesmxnu",
            "locality": "Irrigation Colony",
            "areaName": "Khajri Road",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Bakery",
              "Ice Cream",
              "Snacks",
              "Beverages"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "179482",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 51,
              "lastMileTravel": 11.4,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "11.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-07 22:30:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "pureveg",
                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                      }
                    }
                  ]
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "subHeader": "UPTO ₹45"
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/scoops-fast-food-and-ice-cream-irrigation-colony-khajri-road-chhindwara-150597",
            "type": "WEBLINK"
          }
        }
    ];
// const restroApi={
//         "info": {
//             "id": "257428",
//             "name": "Raajbagh Restaurant ",
//             "cloudinaryImageId": "xvyrclhxftulsglktaek",
//             "locality": "Seoni Road",
//             "areaName": "Chhindwara Locality",
//             "costForTwo": "₹150 for two",
//             "cuisines": [
//               "North Indian",
//               "South Indian",
//               "Indian",
//               "Chinese",
//               "Fast Food",
//               "Beverages"
//             ],
//             "avgRating": 3.7,
//             "veg": true,
//             "parentId": "164019",
//             "avgRatingString": "3.7",
//             "totalRatingsString": "500+",
//             "sla": {
//               "deliveryTime": 59,
//               "lastMileTravel": 10.8,
//               "serviceability": "SERVICEABLE",
//               "slaString": "55-60 mins",
//               "lastMileTravelString": "10.8 km",
//               "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//               "nextCloseTime": "2024-08-07 22:30:00",
//               "opened": true
//             },
//             "badges": {
//               "imageBadges": [
//                 {
//                   "imageId": "v1695133679/badges/Pure_Veg111.png",
//                   "description": "pureveg"
//                 }
//               ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//               "entityBadges": {
//                 "imageBased": {
//                   "badgeObject": [
//                     {
//                       "attributes": {
//                         "description": "pureveg",
//                         "imageId": "v1695133679/badges/Pure_Veg111.png"
//                       }
//                     }
//                   ]
//                 },
//                 "textBased": {
                  
//                 },
//                 "textExtendedBadges": {
                  
//                 }
//               }
//             },
//             "aggregatedDiscountInfoV3": {
//               "header": "60% OFF",
//               "subHeader": "UPTO ₹110"
//             },
//             "differentiatedUi": {
//               "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//               "differentiatedUiMediaDetails": {
//                 "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                 "lottie": {
                  
//                 },
//                 "video": {
                  
//                 }
//               }
//             },
//             "reviewsSummary": {
              
//             },
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {
              
//             },
//             "externalRatings": {
//               "aggregatedRating": {
//                 "rating": "--"
//               }
//             },
//             "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//           },
//           "analytics": {
            
//           },
//           "cta": {
//             "link": "https://www.swiggy.com/restaurants/raajbagh-restaurant-seoni-road-chhindwara-locality-chhindwara-257428",
//             "type": "WEBLINK"
//           }
// }

const Header=()=>{
    return (
        <div className="header" >
            <div>
                <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"></img>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestroCard=({restroData})=>{
  const {name,costForTwo,avgRating,cuisines,areaName}=restroData?.info
    return(
        <div className="res-card">
            <img className="dish-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restroData.info.cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} <FontAwesomeIcon icon={faStar} style={{color: "#1ef11e",}} /> •{restroData.info.sla.slaString}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{areaName}</h4>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="search-bar">
                <p>search</p>
            </div>
            <div className="res-container">
              
                 {
                  restroApi.map((restroinformation)=>(
                    <RestroCard key={restroinformation.info.id}restroData={restroinformation}/>
                  ))
                  }

                {/* wihtout loop or any map filter  */}
                {/* <RestroCard restroData={restroApi[0]}/>
                <RestroCard restroData={restroApi[1]}/>
                <RestroCard restroData={restroApi[2]}/>
                <RestroCard restroData={restroApi[3]}/>
                <RestroCard restroData={restroApi[4]}/>
                <RestroCard restroData={restroApi[5]}/>
                <RestroCard restroData={restroApi[6]}/>
                <RestroCard restroData={restroApi[7]}/>
                <RestroCard restroData={restroApi[8]}/>
                <RestroCard restroData={restroApi[9]}/> */}
                
                {/* normal */}
                {/* <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/> */}
            </div>

        </div>
    )
}

const Footer=()=>{
    return (
        <div className="">

        </div>

    )
}
const AppLayout=()=>{
    return (
        <div className="mainApp">
        <Header/>
        <Body/>
        <Footer/>
        </div>
    )
};




const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout/>);














































// episode 1,2,3
// React.createElement=>Object=>HTMLElement(render);
// jsx
// jsx-is not html inside javascript
// jsx is html like syntax 

// React Element
// const jsxHeading=(
//     <h1 id="heading" className="heading">
//         Namste React using JSX 🚀
//     </h1>
//     );
    
// console.log(jsxHeading);
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(jsxHeading);

// React Component
// const recElement=(
//     <h1>Be Stronger</h1>
// );
// const NameUser=()=>(
//     <div className="NameUser">
//         <h1>Hello Raj Walke Welcome to the Course</h1>
//     </div>
// )
// const number =1000;
// // component composion 
// const Heading=()=>{
//     return (
//         <div className="Container">
//                     <NameUser/>
//                     <p>{number}</p>
//                     {500+300}
                    
//             <h1> Namste React using JSX 🚀</h1>

//             {/* react element inside react component */}
//            <p>{recElement}</p> 
            
//         </div>

//     )
// };

// const hello=(
//     <div className="ok">
//         <h2>Recat component inside the React Element</h2>
        
//         {/* <Heading/> */}
//         {/* <Heading></Heading> */}
//         {Heading()};
//     </div>
// )
// const Heading2=()=> (
//     <div>
//             <h1>Namste React</h1>
//     </div>

// );
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<Heading/>);
// root.render(hello)
{/* <div class="parent">
<div class="child">
    <h1>I'm H1 Tag</h1>
</div>
</div> */}
// create using react 
// const parent=React.createElement("div",{id:"parent"},
//     [
//     React.createElement("div",{id:"child"},
//         [
//         React.createElement("h1",{},"I'm an h1 Tag "),
//         React.createElement("h2",{},"I'm an h2 Tag")
//         ]
//     ),
//     React.createElement("div",{id:"child"},
//         [
//         React.createElement("h1",{},"I'm an h1 Tag"),
//         React.createElement("h2",{},"I'm an h2 Tag")
//         ]
//     )
//     ]
// );



// const heading=React.createElement("h1",{id:"head"},"Namste React");
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render([heading,parent]);