var express = require('express');
var router = express.Router();
var db;
/*
 *{ _id: 595beaa46c975c6283af77e2,
 address:
 { building: '8405',
 coord: [ -74.02521709999999, 40.6224629 ],
 street: '5 Avenue',
 zipcode: '11209' },
 district: 'Brooklyn',
 cuisine: 'Chinese',
 grades:
 [ { date: 2014-02-25T00:00:00.000Z, grade: 'A', score: 12 },
 { date: 2013-08-14T00:00:00.000Z, grade: 'C', score: 28 },
 { date: 2012-07-18T00:00:00.000Z, grade: 'A', score: 13 },
 { date: 2012-03-09T00:00:00.000Z, grade: 'A', score: 13 },
 { date: 2011-10-27T00:00:00.000Z, grade: 'A', score: 12 },
 { date: 2011-05-19T00:00:00.000Z, grade: 'A', score: 13 } ],
 name: 'Chopstix Restaurant',
 restaurant_id: '40900694' }

 * */
/* GET home page. */
/*********************************************************
 * Qno 1 :
 *  To display all the document of collection in database
 ********************************************************/
router.get('/', function (req, res, next) {
    // database connection object assignment
    if (!db) {
        db = req.db_obj;
    }

    db.restaurant.find().each(function (err, dataRow) {
        if (!dataRow) {
            next();
        }
        //console.log("Data is being loged Qno 1");
        // console.log((dataRow));
        // res.render('index', { title: data1 });
    });
});

/*********************************************************
 * Qno 2:
 * To display all the document of collection
 * in database reading only restaurant_id name, distict,
 * cuisine field
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {};
    const projection = {'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1};
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being loged Qno 2");
            //console.log(dataRow);
        });
});

/*********************************************************
 * Qno 3:
 * To display all the document of collection
 * in database reading only restaurant_id name, distict,
 * cuisine field
 * and exclude _id field
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {};
    const projection = {'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1, '_id': 0};
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being loged Qno 3");
            //console.log(dataRow);
        });
});


/*********************************************************
 * Qno 4:
 * To display all the document of collection
 * in database reading only restaurant_id name, distict,
 * cuisine field,
 * and zipcode
 * and exclude _id field
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {};
    const projection = {
        'restaurant_id': 1,
        'name': 1,
        'district': 1,
        'cuisine': 1,
        'address.zipcode': 1,
        '_id': 0
    };
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being loged Qno 4");
            //console.log(dataRow);
        });
});
/*********************************************************
 * Qno 5:
 * To display all the document of collection
 * with district Bronx
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {'district': 'Bronx'};
    db.restaurant.find(query, {})
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being loged Qno 5");
            // console.log(dataRow);
        });
});


/*********************************************************
 * Qno 6:
 * To display all the document of collection
 * first 5 restaurant in district bronux
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {'district': 'Bronx'};

    db.restaurant.find(query, {})
        .limit(5)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being loged Qno 6");
            //console.log(dataRow);
        });
});

/*********************************************************
 * Qno 7:
 * To display all the document of collection
 * after skipping first 5 restaurant
 * in district bronux
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {'district': 'Bronx'};
    db.restaurant.find(query, {})
        .skip(5)
        .limit(5)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being loged Qno 7");
            //console.log(dataRow);
        });
});


/*********************************************************
 * Qno 8:
 * To display all the document of collection
 * whose latitude value less than -95.754168
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {'address.coord.0': {$lt: -95.754168}};
    db.restaurant.find(query, {})
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being loged Qno 8");
            //console.log(dataRow);
        });
});

/*********************************************************
 * Qno 9:
 * To display all the restaurant
 * that doesnt preapare any cuisine of american,
 * and   score is more than 70]
 * and   latitude value less than -95.754168
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {
        $and: [
            {'address.coord.0': {$lt: -95.754168}}
            , {'grades.score': {$gt: 70}}
            , {cuisine: {$ne: 'American'}}

        ]
    };
    db.restaurant.find(query, {})
        .each(function (err, dataRow) {
            if (!dataRow) next();
            // console.log("data is being loged QNo 9");
            // console.log(dataRow);
        });
});


/*********************************************************
 * Qno   10:
 * To display all the restaurant
 * which name contains first three letter Wil
 *
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {name: {$regex: '^Wil'}};
    const projection = {'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1};
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            // console.log("data is being logedd Qno 10");
            //console.log(dataRow);
        });
});


/*********************************************************
 * Qno   11:
 * To display all the restaurant
 * which name contains last three letter ces
 *
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {name: {$regex: '$ces'}};
    const projection = {'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1};
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //  console.log("data is being loged QNo 11");
            //  console.log(dataRow);
        });
});


/*********************************************************
 * Qno   12:
 * To display all the restaurant
 * which name contains Reg somewhere in between
 *
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {name: {$regex: 'Reg'}};
    const projection = {'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1};
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //  console.log("data is being logged Qno 12");
            // console.log(dataRow);
        });
});

/*********************************************************
 * Qno 13:
 * To display all the document of collection
 *  district bronux
 *  and prepare American and Chinese Cuisine
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = {
        $and: [{'district': 'Bronx'}
            , {'cuisine': {$in: ['American', 'Chinese']}}

        ]
    };

    db.restaurant.find(query, {})
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being logged Qno 13");
           // console.log(dataRow);
        });
});



/*********************************************************
 * Qno 14:
 * To display all the restaurant whose
 * district is in 'Staten Island'or 'Queens' or'Bronx' or Broklyn'
 * 
 ********************************************************/
router.get('/', function (req, res, next) {
    const query = { district:{
        $in: ['Staten Island','Queens','Bronx','Broklyn']}};
    const projection = {'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1};
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being logged Qno 14");
            //console.log(dataRow);
        });
});


/*********************************************************
 * Qno 15:
 * To display all the restaurant whose
 * district are not in 'Staten Island'or 'Queens' or'Bronx' or Broklyn'
 ********************************************************/
router.get('/', function (req, res, next) {

    const query = { district:{ $nin: ['Staten Island','Queens','Bronx','Brooklyn']}};
    const projection = {'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1};
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
        //    console.log("Data is being logged Qno 15");
          //  console.log(dataRow);
        });
});



/*********************************************************
 * Qno 16:
 * To display all the restaurant whose
 * achieved score not more than 10
 ********************************************************/
router.get('/', function (req, res, next) {

    const query = { 'grades.score':{$lt:11}};
    const projection = {'restaurant_id': 1, 'name': 1, 'district': 1, 'cuisine': 1};
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being logged Qno 16");
           // console.log(dataRow);
        });
});

/*********************************************************
 * Qno 17:
 * To display all the restaurant whose
 * second element of coord arrya contains tha value greater than 42 and less than 52
 ********************************************************/
router.get('/', function (req, res, next) {

    const query = { 'coord.1':{$gt:42,$lt:53 }};
    const projection = {'restaurant_id': 1, 'name': 1, 'address': 1, 'coord': 1};
    db.restaurant.find(query, projection)
        .each(function (err, dataRow) {
            if (!dataRow) next();
           // console.log("Data is being logged Qno 17");
            //console.log(dataRow);
        });
});

/*********************************************************
 * Qno 18:
 * To display all the restaurants
 * and sort then in ascending order based on Name
 ********************************************************/
router.get('/', function (req, res, next) {

       db.restaurant.find().sort({'name':1})
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being logged Qno 18");
            //console.log(dataRow);
        });
});



/*********************************************************
 * Qno 19:
 * To display all the restaurants
 * and sort them in descending order based on Name
 ********************************************************/
router.get('/', function (req, res, next) {

    db.restaurant.find().sort({'name':-1})
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being logged Qno 19");
            //console.log(dataRow);
        });
});


/*********************************************************
 * Qno 20:
 * To display all the restaurants
 * and sort them in ascending order based on Name
 * and again sort them in descending order based on district
 ********************************************************/
router.get('/', function (req, res, next) {
    db.restaurant.find().sort({'cuisine':1,'district':-1})
        .each(function (err, dataRow) {
            if (!dataRow) next();
            //console.log("Data is being logged Qno 20");
            //console.log(dataRow);
        });
});



/*********************************************************
 * Qno 21:
 * To check if all address contains street or not
 ********************************************************/
router.get('/', function (req, res, next) {
    const query={'street':{$exists:true}};
    db.restaurant.find(query).each(function (err,dataRow) {
         //console.log("Data is being logged Qno 21");
        // console.log(dataRow
        // );
    })

    next();

});

/*********************************************************
 * Qno 22:
 * return all restaurant whose coord value is double
 ********************************************************/
router.get('/', function (req, res, next) {
    const query={'coord.0':{$type: "double"},'coord.1':{$type: "double"}};
     db.restaurant.find(query).each(function (err,rowData) {
         if(!rowData)next();
        // console.log("Data is being logged Qno 22");
         //console.log(rowData);
     });
});


/*********************************************************
 * Qno 23:
 * return all restaurant whose coord value is double
 ********************************************************/
router.get('/', function (req, res, next) {
    const query={'name':{$regex:'^Mad'}};
    const projection = {'restaurant_id': 1, 'name': 1, 'district': 1, 'coord.1': 1,'coord.0':1,'cuisine':1};
    db.restaurant.find(query,projection).each(function (err,rowData) {
        if(!rowData)next();
        console.log("Data is being logged Qno 23");
        console.log(rowData);
    });
});


module.exports = router;
