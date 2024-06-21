import { ref } from 'vue';

export function getDataSource(){
    const readAllData=function(existingData){
        return existingData;
    }
    const getCapabilities=function(){
        return {
            readNext: true,
            readPrev: true,
            readFirst: true,
            readLast: true,
            readThisRecord: true,
            updateThisRecord: false,
            updateAll: false,
        }
    }
    const readNext = function(){
        console.log('defaultData readNext');
    }
    const readPrev = function(){
        console.log('defaultData readPrev');
    }
    const readFirst = function(){
        console.log('defaultData readFirst');
    }
    const readLast = function(){
        console.log('defaultData readLast');
    }
    const readThisRecord = function(){
        console.log('defaultData readThisRecord');
    }
    debugger;
    return {readAllData, getCapabilities, readNext, readPrev, readFirst, readLast, readThisRecord};

}
