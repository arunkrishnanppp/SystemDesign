import LogFirstImpl from './FirstUse.js';
import LogSecondImpl from './SecondUse.js';

new LogFirstImpl().log();
new LogSecondImpl().log();

new LogSecondImpl().log();

new LogFirstImpl().log();
