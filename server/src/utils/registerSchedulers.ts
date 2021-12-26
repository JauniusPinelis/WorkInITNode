import * as cron from 'node-cron';

const registerScheduledTasks = () => {
    const job = cron.schedule('*/2 * * * *', () => {
        console.log('running a task every minute');
    });

    job.start();
}

module.exports = registerScheduledTasks;