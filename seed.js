require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Workout = require('./models/workout');


(async function () {

    // await User.deleteMany({});
    // const users = await User.create([
    //     {name: 'testTrainer', email: 'testTrainer@email.com', password: 'testTrainer111', trainer: true},
    //     {name: 'testClient1', email: 'testClient1@email.com', password: 'testClient111', trainer: false},
    //     {name: 'testClient2', email: 'testClient2@email.com', password: 'testClient222'},
    // ]);

    const workouts = await Workout.create([
        {name:'testing!', user:'60301484941a984ad6f47ff3'}
    ]);

    process.exit();

})();
