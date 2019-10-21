import {run} from './compile';



async function main(){
    console.clear();
    try {
        run();
    } catch(err) { 
        console.warn(err);
        process.exit(1);
    }
}
main();


