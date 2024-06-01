import {c} from "../components/constants.js";

export function getDialogDefinitions(){
    const getDialogAppearence = function(dialogDef){
        var currentDefs = defs(dialogDef);
        return currentDefs.dialogAppearence;
    }
    const getDialogFields = function(dialogDef){
        debugger;
        var currentDefs = defs(dialogDef);
        return currentDefs.dialogFields;
    }
    const getDefaultData = function(dialogDef){
        var currentDefs = defs(dialogDef);
        return currentDefs.defaultData;
    }
    return {getDialogAppearence, getDialogFields, getDefaultData}
}
/*
const existingData = {
    name: "Curious George",
    num: "7.5",
    city: "The Zoo",
    field4: true
}
*/


const defs = function(dialogDef){
    switch(dialogDef){
        case 'testDialog':{
            return {
                dialogAppearence: {
                    twPrompt: 'text-lg text-current ml-[30%] my-[5%]',
                    prompt: 'Test Dialog',
                    twstyle:"fixed w-[50%] h-auto p-[2%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded border-2 border-blue-500 shadow-xl shadow-black",
                },
                dialogFields :
                    [
                        {
                            name: 'field1',
                            type: 'inputText',
                            ref: 'field1',
                            value: function(existingData){
                                debugger;
                                return existingData.name;
                            },
                            required: true,
                            size: '10',
                            maxlength: '18',
                            startFocus: true,
                            label: "Field 1"
                        },
                        {
                            name: 'field2',
                            type: 'inputNumber',
                            ref: 'field2',
                            value: function(existingData){
                                debugger;
                                return existingData.num;
                            },
                            size: '5',
                            stepVal: '0.5',
                            required: true,
                            maxlength: '5',
                            tailwindStyle: "border py-2 px-3 text-grey-darkest text-sm outline outline-2 outline-blue-500 focus:outline-red-500 hover:outline-red-500 rounded",
                            startFocus: false,
                            label: "Field 2"
                        },
                        {
                            name: 'field3',
                            type: 'inputText',
                            ref: 'field3',
                            placeholder: 'Please Enter..',
                            size: '20',
                            maxlength: '18',
                            startFocus: false,
                            value: function(existingData){
                                debugger;
                                return existingData.city;
                            },
                            label: "Field 3"

                        },
                        {
                            name: 'field4',
                            type: 'inputCheckbox',
                            ref: 'field4',
                            startFocus: false,
                            value: function(existingData){
                                debugger;
                                return existingData.field4;
                            },
                            label: "Field 4"
                        },
                        {
                            name: 'field5',
                            type: 'backgroundPicker',
                            ref: 'field5',
                            startFocus: false,
                            radioLabelStyle: "mr-[10px] text-lg",
                            value: function(existingData){
                                debugger;
                                return existingData.field5;
                            },
                            label: "Field 5"
                        },
                        {
                            name: 'field6',
                            type: 'radioGroup',
                            ref: 'field6',
                            startFocus: false,
                            value: function(existingData){
                                debugger;
                                return existingData.field6;
                            },
                            buttonLabelStyle: "mr-[10px] text-lg",
                            radioButtons :[
                                {
                                    label: 'red',
                                    value: 'red'
                                },
                                {
                                    label: 'blue',
                                    value: 'blue'
                                },
                                {
                                    label: 'green',
                                    value: 'green'
                                },
                            ],
                            orientation: 'vertical',
                            label: "Field 6"
                        },
                        {
                            name: 'field7',
                            type: 'vselect',
                            ref: 'field7',
                            startFocus: false,
                            selectType: "scroll",
                            selectSize: 4,
                            selectMultiple: true,
                            value: function(existingData){
                                debugger;
                                return existingData.field7;
                            },
                            selectStyle: 'mr-[10px] text-lg',

                            selectLabelStyle: "mr-[10px] text-lg",
                            selectOptions :[
                                {
                                    label: 'red',
                                    value: 'red'
                                },
                                {
                                    label: 'blue',
                                    value: 'blue'
                                },
                                {
                                    label: 'green',
                                    value: 'green'
                                },
                                {
                                    label: 'orange',
                                    value: 'orange'
                                },
                            ],
                            label: "Field 7"
                        },
                        {
                            name: 'field8',
                            type: 'vtextarea',
                            ref: 'field8',
                            placeholder: 'Please Enter..',
                            rows: '6',
                            columns: '40',
                            maxlength: '18',
                            startFocus: false,
                            value: function(existingData){
                                debugger;
                                return existingData.field8;
                            },
                            label: "Field 8"

                        },
                ],
                defaultData:{
                    name: "Curious George",
                    num: "7.5",
                    city: "The Zoo",
                    field4: true,
                    field5: {
                        backgroundType: 'color',
                        colorValue: '#FFAABB',
                        fileUploaded: false,
                    },
                    field6: "blue",
                    field7: "orange",
                    field8: "Now is the time for every good man to come to the aid of his country"

                }
            }
        }
    }
}
