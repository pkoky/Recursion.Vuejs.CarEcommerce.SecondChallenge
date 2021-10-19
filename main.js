class Car {
    constructor(carModel, category, price, imgUrl, registrationDate) {
        this.carModel = carModel;
        this.category = category;
        this.price = price;
        this.imgUrl = imgUrl;
        this.registrationDate = registrationDate;
    }

    getRegistrationDate() {
        let date = this.registrationDate;
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
    }
} 


class CarDB {
    static table = [
        {
            "carModel":"Model 3",
            "category":"Tesla",
            "price":48490,
            "imgURL":"https://media.istockphoto.com/photos/electric-sports-car-the-tesla-model-3-picture-id1277254968?k=6&m=1277254968&s=612x612&w=0&h=4j3WhZQD95BJyqOnML2sDatX9SFQomJclLyd5bbV3FU=" ,
            "date":new Date(2020, 09, 04) 
        },
        {
            "carModel":"Model X",
            "category":"Tesla",
            "price":89990,
            "imgURL":"https://media.istockphoto.com/photos/tesla-model-x-travelling-on-the-freeway-in-silicon-valley-picture-id1191552504?k=6&m=1191552504&s=612x612&w=0&h=NWHap01jKkYzC5BT-9gaKYr8phGeO1ZUYHnGPLQ5RUM=",
            "date":new Date(2017, 08, 08) 
        },
        {
            "carModel":"Model S",
            "category":"Tesla",
            "price":82990,
            "imgURL":"https://media.istockphoto.com/photos/tesla-model-s-on-the-highway-picture-id582261244?k=6&m=582261244&s=612x612&w=0&h=LwYAD7oI6Xy9gsRM7OZ10Nsq-ehGsSmLcbPwQEmZBpg=",
            "date": new Date(2019, 04, 01) 
        },
        {
            "carModel":"Model Y",
            "category":"Tesla",
            "price":82990,
            "imgURL":"https://media.istockphoto.com/photos/tesla-model-y-in-austin-texas-at-360-bridge-picture-id1272025387?k=6&m=1272025387&s=612x612&w=0&h=o_W18f-pFNdHsSpdaNejXSS7G8XnWfayhinzZVWhQU8=",
            "date": new Date(2020, 02, 02) 
        },
        {
            "carModel":"Cayenne",
            "category":"Porsche",
            "price":67500,
            "imgURL":"https://media.istockphoto.com/photos/porsche-cayenne-picture-id1138819485?k=6&m=1138819485&s=612x612&w=0&h=uSPCZUofVb5ComBHUpH5qZ5QB7B1WWcKFxNzm53W2ME=",
            "date":new Date(2017, 12, 20) 
        },
        {
            "carModel":"Macan",
            "category":"Porsche",
            "price":52100,
            "imgURL":"https://media.istockphoto.com/photos/porsche-macan-gts-crossover-suv-picture-id508107322?k=6&m=508107322&s=612x612&w=0&h=syLuqvZng-mEbqJblhY3q6wWxcUlaijknWO9ea90CJo=",
            "date": new Date(2019, 07, 12) 
        },
        {
            "carModel":"Camry",
            "category":"Toyota",
            "price":24425,
            "imgURL":"https://media.istockphoto.com/photos/toyota-camry-in-motion-picture-id905266220?k=6&m=905266220&s=612x612&w=0&h=8iRQyhjJYVn_ppC6x3LTLGzG0P67NyCvuQqxvO40ryI=",
            "date": new Date(2015, 06, 29) 
        },
        {
            "carModel":"Accord",
            "category":"Honda",
            "price":24800,
            "imgURL":"https://media.istockphoto.com/photos/honda-accord-in-the-city-picture-id649004692?k=6&m=649004692&s=612x612&w=0&h=7WnRBZcLQ6-Y2FrKKVxya3nwJ6U-CLeZUuk-D5RVlu8=",
            "date": new Date(2018, 10, 02) 
        },
        {
            "carModel":"Civic",
            "category":"Honda",
            "price":20650,
            "imgURL":"https://media.istockphoto.com/photos/new-honda-civic-front-picture-id458119929?k=6&m=458119929&s=612x612&w=0&h=h8uh7Bqgw2l1Hhg2TmX05VSBnp2cxrjpTBtvPYpKiD4=",
            "date": new Date(2015, 04, 04) 
        },
        {
            "carModel":"CX-5",
            "category":"Mazda",
            "price":26940,
            "imgURL":"https://media.istockphoto.com/photos/new-2018-mazda-cx5-red-cx5-suv-car-japanese-car-moving-vehicle-picture-id1069236296?k=6&m=1069236296&s=612x612&w=0&h=CO2YJA51esFD2an-sKkhusVifvwTwhBXR3ebxD6h3Fg=",
            "date": new Date(2012, 11, 03) 
        },
        {
            "carModel":"GLE Coupe",
            "category":"Mercedes-Benz",
            "price":76500,
            "imgURL":"https://media.istockphoto.com/photos/mercedesbenz-gle-43-4matic-coupe-picture-id894961460?k=6&m=894961460&s=612x612&w=0&h=aKbMi31eXuJOSVEKlesIzsJlLM6QhUe0k_5V-FJvH0M=",
            "date": new Date(2020, 02, 05) 
        },
        {
            "carModel":"CLA",
            "category":"Mercedes-Benz",
            "price":37850,
            "imgURL":"https://media.istockphoto.com/photos/mercedes-benz-cla-picture-id472122163?k=6&m=472122163&s=612x612&w=0&h=IIRhsoWfMXXy6b_aTMtSA2dgSTPK4pSD-_M5vh8OY6M=",
            "date": new Date(2019, 06, 09) 
        },
        {
            "carModel":"GLA 250",
            "category":"Mercedes-Benz",
            "price":37280,
            "imgURL":"https://media.istockphoto.com/photos/mercedesbenz-gla-2020-test-drive-day-picture-id1297389811?k=6&m=1297389811&s=612x612&w=0&h=NOPBUppwL9aFKKoha3phbhpHUw6hYSdsW5NlFejp4RU=",
            "date": new Date(2017, 05, 02) 
        },
        {
            "carModel":"RX 350",
            "category":"Lexus",
            "price":45175,
            "imgURL":"https://media.istockphoto.com/photos/hybrid-suv-lexus-nx-on-the-road-picture-id657915058?k=6&m=657915058&s=612x612&w=0&h=DGCgfv-pBE75oOUktrX_WpGSadnEmRcm5iPfa49BOQw=",
            "date": new Date(2015, 01, 01) 
        },
        {
            "carModel":"NX 300",
            "category":"Lexus",
            "price":37510,
            "imgURL":"https://media.istockphoto.com/photos/lexus-nx-200t-car-picture-id480681192?k=6&m=480681192&s=612x612&w=0&h=Ne9_r4aioLH_jpiK41fHpTr-ADdKsHcFMOOPXT9DGp8=",
            "date": new Date(2018, 09, 12) 
        },
        {
            "carModel":"Urus",
            "category":"Lamborghini",
            "price":218000,
            "imgURL":"https://media.istockphoto.com/photos/lamborghini-urus-picture-id1184360237?k=6&m=1184360237&s=612x612&w=0&h=cDC3bjJCG9fZC8VpJnuoK73du-hKLnij-14eKHxuLyA=",
            "date": new Date(2021, 08, 16) 
        },
        {
            "carModel":"Aventador",
            "category":"Lamborghini",
            "price":393695,
            "imgURL":"https://media.istockphoto.com/photos/lamborghini-aventador-lp-7504-superveloce-picture-id1083962000?k=6&m=1083962000&s=612x612&w=0&h=VBYRfp0408ZHqDTdJ69pIJP7z_zhj2T7z8OB-28adSU=",
            "date": new Date(2020, 09, 11) 
        },
        {
            "carModel":"A3",
            "category":"Audi",
            "price":33500,
            "imgURL":"https://media.istockphoto.com/photos/audi-a3-sportback-on-a-street-picture-id1255388367?k=6&m=1255388367&s=612x612&w=0&h=nh2TLu9W-68-3_PgN1-0qkXYaw4mfFZviKY1sY_fjJ8=",
            "date": new Date(2019, 05, 08) 
        },
        {
            "carModel":"X3",
            "category":"BMW",
            "price":43000,
            "imgURL":"https://media.istockphoto.com/photos/-picture-id1206921084?k=6&m=1206921084&s=612x612&w=0&h=o8ETeAQHAuzOerMorNWxPnDpyhSyrxiy6vvIQ8TLd4Y=",
            "date": new Date(2018, 03, 11) 
        },
        {
            "carModel":"2 Series",
            "category":"BMW",
            "price":37500,
            "imgURL":"https://media.istockphoto.com/photos/coupe-competition-picture-id1187329409?k=6&m=1187329409&s=612x612&w=0&h=qDHLX8yA8WVGmEwFU8k56z72uobZfcGkHH14zzpLPc4=",
            "date": new Date(2019, 01, 15) 
        },

    ]
}



class Controller {

    static arr = [];

    static pushCarObject(obj) {
        Controller.arr.push(obj);
    }


    static createCarObject(currCarData) {
        let obj = new Car(currCarData.carModel, currCarData.category, currCarData.price, currCarData.imgURL, currCarData.date);
        return obj;
    }


    static getAllCategories() {
        let carObjects = Controller.arr;

        let mySet = new Set(carObjects.map(carObject => carObject.category));
        return Array.from(mySet);
    }


    static getTargetCarObjectBySelectedCategory(category) {
        let carObjectsArr = Controller.arr;

        if (Controller.getAllCategories().includes(category)) {
            carObjectsArr = carObjectsArr.filter(carObject => carObject.category === category);
        }
        return carObjectsArr;
    }

}



// CarDBを元にCarObjectを生成しarrに追加する
CarDB.table.forEach(carData => Controller.pushCarObject(Controller.createCarObject(carData)));



var carApp = new Vue({
    el: '#carApp',
    data: {
        carObjects: Controller.arr,
        category: "All Categories",
    },


    computed: {

        getAllCategories() {
            return Controller.getAllCategories();
        }

    },


    methods: {
        regenerationCarItems() {
           this.setCarObjectsBySelectedCategory();
        },

        setCarObjectsBySelectedCategory() {
            this.carObjects = Controller.getTargetCarObjectBySelectedCategory(this.category);
        }
    }
})



// let arr = Controller.arr;
// console.log(Controller.getAllCategory(arr));